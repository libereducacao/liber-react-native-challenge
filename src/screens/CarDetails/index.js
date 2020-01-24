import React from 'react';
import { View, Image, Text, ScrollView, SafeAreaView } from 'react-native';

//Components
import IconSet from './IconSet'
import Header from '../Header'

//Assets
import Car from '../../assets/car.png'
import CarSmall from '../../assets/car3.png'
import Gauge from '../../assets/gauge.png'
import Starter from '../../assets/starter.png'

//Style
import style from './style'
import { constants, func } from '../../mainStyle'

const { card, carImage, detailsContainer, headerText, cardDetails, iconsContainer, safeView } = style
const { text } = func;
const { clrBlack, clrBlack70 } = constants

export default CarDetails = ({navigation: { goBack, state: { params } }}) => {
    const { Marca, AnoModelo, Combustivel, CodigoFipe, parsed: { name, price, cc, volt } } = params;

    return (
        <SafeAreaView style={safeView}>
            <ScrollView contentContainerStyle={detailsContainer}>
                <Header onPress={() => goBack()}/>
                <Text style={[text(33, clrBlack), headerText]}>Detalhes</Text>
                <View style={card}>
                    <Image resizeMode="contain" style={carImage} source={Car}/>
                    <View style={cardDetails}>
                        <Text numberOfLines={1} style={text(18, clrBlack70, "Medium")}>{`${Marca} - ${name} (${AnoModelo})`}</Text>
                        <Text style={text(14, clrBlack)}>R$<Text style={{fontSize: 26}}>{price[0]},{price[1]}*</Text></Text>
                        
                        <View style={iconsContainer}>
                            <IconSet data={Combustivel} label="COMBUSTÍVEL" image={Starter}/>
                            <IconSet data={volt} label="POTÊNCIA" image={CarSmall}/>
                            <IconSet data={cc + (cc === "Indisponível" ? "" : "00")} label="CILINDRADAS" image={Gauge}/>
                        </View>
                        <Text style={[text(14, clrBlack70, "Medium"), { marginBottom: 10 }]}>Código FIPE: {CodigoFipe}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}