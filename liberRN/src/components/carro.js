import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Image from 'react-native-remote-svg'

import imgCarro from '../assets/img/car.svg';
import imgEngrenagem from '../assets/img/settings.svg';
import imgRaio from '../assets/img/lighting-button.svg';

import {
    ContainerCarro, FotoCarro, InformacoesCarro,
    MarcaCarro, ModeloCarro, ContainerCambioCarro, CambioCarro, LabelPrecoCarro, PrecoCarro
} from '../styled-components/carro'

const carro = ({ marca, modelo, preco, ...props }) => {

    //Preço vem no formato R$ 123.000,00
    preco = preco.split(' ')[1]  //Remove o 'R$'
    preco = preco.split(',') //Separa o preço pela virgula
    //Ou seja, a primeira parte do preço é antes da virgula, e a segunda parte é depois
    
    //A ultima informacao que vem no modelo é o cambio
    cambio = modelo.split(' ').pop() //Pega a ultima palavra da string do modelo
    if (cambio.includes('Aut')) { //Checa se essa ultima parte contem 'Aut' de Automático
        cambio = 'AUTOMÁTICO'
        imgCambio = imgRaio;
    } else {
        cambio = 'MANUAL'
        imgCambio = imgEngrenagem;
    }

    //Retira as informações extras que o modelo traz, cortando a string baseado nas cilindradas (1.0, 1.4, 1.6, etc)
    //Caso o modelo nao possua essa informação, fica dificil saber aonde começa as informações adicionais, portanto, nada é feito com a string
    modelo.indexOf('.') === -1 ? '' : modelo = modelo.substr(0, modelo.indexOf('.') - 1);

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
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <PrecoCarro>R$</PrecoCarro>
                        <PrecoCarro style={{ fontSize: 20, marginLeft: 3 }}>{preco[0]}</PrecoCarro>
                        <PrecoCarro>,{preco[1]}</PrecoCarro>
                    </View>

                </InformacoesCarro>
            </ContainerCarro>
        </TouchableWithoutFeedback>
    )
}

export default carro;
