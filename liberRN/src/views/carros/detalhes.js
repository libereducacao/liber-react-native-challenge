import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-remote-svg'

import { Titulo, Container } from '../../styled-components'
import { FotoCarro, InformacoesCarro, ModeloCarro, ContainerMotorCarro } from '../../styled-components/carro'


import ItemMotorCarro from '../../components/itemMotorCarro'
import imgCarro from '../../assets/img/car.svg';
import imgVelocimentro from '../../assets/img/gauge.svg';
import imgMotorArranque from '../../assets/img/starter.svg';
import imgPeça from '../../assets/img/part.svg';

export default class detalhes extends Component {

    render() {
        let { Marca, Modelo, AnoModelo: Ano, Combustivel, Valor, CodigoFipe } = this.props.navigation.getParam('carro');
        Valor = Valor.split(' ');

        let regexPotencia = /([0-9]{2,4})cv/g;
        let Potencia = Modelo.match(regexPotencia);
        Potencia === null ? Potencia = "Indisponível" : '';

        let regexCC = /[0-9]\.[0-9]/g;
        let CC = Modelo.match(regexCC);
        CC === null ? CC = "Indisponível" : CC = (parseFloat(CC) * 1000).toLocaleString();

        Modelo = Modelo.substr(0, Modelo.indexOf('.') - 1);

        return (
            <Container>
                <Titulo>Detalhes</Titulo>
                <View style={{ marginBottom: 50 }}>
                    <FotoCarro >
                        <Image
                            source={imgCarro}
                            style={{ width: 300, height: 180 }}
                        />
                    </FotoCarro>
                    <InformacoesCarro>
                        <ModeloCarro style={{ fontSize: 18, opacity: 0.7 }}>{Marca} - {Modelo} ({Ano})</ModeloCarro>
                        <Text style={{ fontSize: 26, color: '#080D2D', fontWeight: 'bold' }}>
                            <Text style={{ fontSize: 14, color: '#080D2D', fontWeight: 'bold' }}>{Valor[0]} </Text>
                            {Valor[1]}*
                        </Text>
                        <ContainerMotorCarro>
                            <ItemMotorCarro
                                icone={imgMotorArranque}
                                label="COMBUSTÍVEL"
                                texto={Combustivel}
                            />
                            <ItemMotorCarro
                                icone={imgPeça}
                                label="POTÊNCIA"
                                texto={Potencia}
                            />
                            <ItemMotorCarro
                                icone={imgVelocimentro}
                                label="CILINDRADAS"
                                texto={CC}
                            />

                        </ContainerMotorCarro>
                        <Text style={{ fontSize: 14, color: '#080D2D', opacity: 0.7 }}>Código FIPE: {CodigoFipe}</Text>
                    </InformacoesCarro>
                </View>
            </Container>
        )
    }
}
