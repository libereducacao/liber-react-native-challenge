import React from 'react';
import { Text } from 'react-native';

import Image from 'react-native-remote-svg'

import imgCarro from '../assets/img/car.svg';
import imgEngrenagem from '../assets/img/settings.svg';

import {
    ContainerCarro, FotoCarro, InformacoesCarro,
    MarcaCarro, ModeloCarro, ContainerCambioCarro, CambioCarro, LabelPrecoCarro, PrecoCarro
} from '../styled-components/carro'

const carro = ({marca, modelo, cambio, preco}) => (
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
                    source={imgEngrenagem}
                    style={{ width: 12, height: 12, marginRight: 5 }}
                />
                <CambioCarro>{cambio}</CambioCarro>
            </ContainerCambioCarro>
            <LabelPrecoCarro>PREÇO</LabelPrecoCarro>
            <PrecoCarro>R${preco}</PrecoCarro>
        </InformacoesCarro>
    </ContainerCarro>
)

export default carro;
