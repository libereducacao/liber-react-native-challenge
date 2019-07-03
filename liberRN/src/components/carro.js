import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Image from 'react-native-remote-svg'

import imgCarro from '../assets/img/car.svg';
import imgEngrenagem from '../assets/img/settings.svg';
import imgRaio from '../assets/img/lighting-button.svg';

import {
    ContainerCarro, FotoCarro, InformacoesCarro,
    MarcaCarro, ModeloCarro, ContainerCambioCarro, CambioCarro, LabelPrecoCarro, PrecoCarro
} from '../styled-components/carro'

const carro = ({ marca, modelo, preco, ...props }) => {

    preco = preco.split(',')
    
    cambio = modelo.split(' ').pop()
    if (cambio.includes('Aut')) {
        cambio = 'AUTOMÁTICO'
        imgCambio = imgRaio;
    } else {
        cambio = 'MANUAL'
        imgCambio = imgEngrenagem;
    }

    modelo = modelo.substr(0, modelo.indexOf('.') - 1);

    return (
        <TouchableWithoutFeedback onPress={() => props.verDetalhes()}>
            <ContainerCarro>
                <FotoCarro>
                    <Image
                        source={imgCarro}
                        style={{ width: 125, height: 90 }}
                    />
                </FotoCarro>
                <InformacoesCarro>
                    <MarcaCarro>{marca}</MarcaCarro>
                    <ModeloCarro>{modelo}</ModeloCarro>
                    <ContainerCambioCarro>
                        <Image
                            source={imgCambio}
                            style={{ width: 12, height: 12, marginRight: 5 }}
                        />
                        <CambioCarro>{cambio}</CambioCarro>
                    </ContainerCambioCarro>
                    <LabelPrecoCarro>PREÇO</LabelPrecoCarro>
                    <PrecoCarro>
                        R$
                <PrecoCarro style={{ fontSize: 20 }}>
                            {preco[0]}
                        </PrecoCarro>
                        ,{preco[1]}
                    </PrecoCarro>
                </InformacoesCarro>
            </ContainerCarro>
        </TouchableWithoutFeedback>
    )
}

export default carro;
