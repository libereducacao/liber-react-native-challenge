import React from 'react';
import { View, Image, Text, TouchableNativeFeedback } from 'react-native';
import Model from '../partials'

//Assets
import LTButton from '../../assets/lighting-button.png'
import Car from '../../assets/car.png'
import Cog from '../../assets/settings.png'

//Style
import style from './style'
import { func, constants } from '../../mainStyle'

const { clrBlack, clrLight30, clrBlue, clrDarkBlue } = constants
const { size, text } = func;
const { mainContainer, imgContainer, detailsContainer, carChBtn } = style;

export default CarCell = ({model, navigate}) => {
    const { price, name, ch } = Model(model);
    const chCheck = ch === "MANUAL"

    return (
        <TouchableNativeFeedback onPress={() => navigate("Details", { ...model, parsed: Model(model) })}>
            <View style={mainContainer}>
                <View style={imgContainer}>
                    <Image resizeMode="contain" style={size("100%", "65%")}  source={Car}/>
                </View>
                <View style={detailsContainer}>
                    <Text style={text(15, clrLight30)}>{model.Marca}</Text>
                    <Text numberOfLines={1} style={[text(20, clrBlack), { width: "80%" }]}>{name}</Text>
                    {
                        ch ? 
                            <View style={carChBtn}>
                                <Image resizeMode="contain" style={[size(16), { marginRight: chCheck ? 6 : 3 }]} source={chCheck ? Cog : LTButton}/>
                                <Text style={text(13, clrDarkBlue)}>{ch}</Text>
                            </View>
                        :
                            null
                    }
                    <Text style={[text(15, clrLight30), { marginTop: ch ? 0 : 4 }]}>PREÇO</Text>
                    <Text style={[text(15.5, clrBlue)]}>
                        R$
                        <Text style={{fontSize: 24.5}}>{price[0]}</Text>
                        <Text style={{fontSize: 15.5}}>{price[1]}</Text>
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}