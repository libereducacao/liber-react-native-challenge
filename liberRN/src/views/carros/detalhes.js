import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-remote-svg'

import { Titulo, Container } from '../../styled-components'
import {
    FotoCarro, InformacoesCarro,
    MarcaCarro, ModeloCarro,
    ContainerMotorCarro,
} from '../../styled-components/carro'

import ItemMotorCarro from '../../components/itemMotorCarro'

import imgCarro from '../../assets/img/car.svg';
import imgVelocimentro from '../../assets/img/gauge.svg';
import imgMotorArranque from '../../assets/img/starter.svg';
import imgPeça from '../../assets/img/part.svg';

export default class detalhes extends Component {
    render() {
        return (
            <Container>
                <Titulo>Detalhes</Titulo>
                <View style={{ paddingHorizontal: 20 }}>
                    <FotoCarro >
                        <Image
                            source={imgCarro}
                            style={{ width: 350, height: 160 }}
                        />
                    </FotoCarro>
                    <InformacoesCarro>
                        <MarcaCarro>Marca - Modelo (Ano)</MarcaCarro>
                        <ModeloCarro>R$ 120.700,00*</ModeloCarro>
                        <ContainerMotorCarro>
                            <ItemMotorCarro
                                icone={imgMotorArranque}
                                label="COMBUSTÍVEL"
                                texto="Álcool"
                            />
                            <ItemMotorCarro
                                icone={imgPeça}
                                label="POTÊNCIA"
                                texto="450cv"
                            />
                            <ItemMotorCarro
                                icone={imgVelocimentro}
                                label="CILINDRADAS"
                                texto="1.000"
                            />

                        </ContainerMotorCarro>
                        <Text style={{ fontSize: 14, color: '#080D2D', opacity: 0.7 }}>Código FIPE: 56712-1</Text>
                    </InformacoesCarro>
                </View>
            </Container>
        )
    }
}
