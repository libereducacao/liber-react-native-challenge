import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-remote-svg'

import imgSearch from '../../assets/img/search.svg';
import imgLoading from '../../assets/img/loading.svg';

import { Titulo, Container, ContainerInput, Input } from '../../styled-components'
import Carro from '../../components/carro'

const busca = (props) => {

    return (
        <Container>
            <Titulo>Carros</Titulo>
            <ContainerInput>
                <Input
                    onChangeText={(busca) => props.buscar(busca)}
                    placeholder="Ache seu carro..."
                    placeholderTextColor={'#080D2D'}
                />
                <Image
                    source={imgSearch}
                    style={{ width: 18, height: 18 }}
                />
            </ContainerInput>
            <View style={{ marginBottom: 50, width: '100%' }}>
                {
                    props.carros.length === 0 ?
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <Image
                                source={imgLoading}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                        :
                        props.carros.map(carro => {
                            let { Marca, Modelo, Valor, CodigoFipe } = carro;
                            return <Carro key={CodigoFipe} marca={Marca} modelo={Modelo} preco={Valor}
                                verDetalhes={() => {
                                    props.navigation.navigate('Detalhes', {
                                        carro
                                    })
                                }}
                            />
                        })
                }
            </View>
        </Container>
    )
}

export default busca;
