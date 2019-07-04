import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Image from 'react-native-remote-svg'

import imgSearch from '../../assets/img/search.svg';
import imgLoading from '../../assets/img/loading.svg';

import { Titulo, Container, ContainerInput, Input } from '../../styled-components'
import Carro from '../../components/carro'

const busca = ({carros, loading, erro, buscar, navigation}) => {

    return (
        <Container>
            <Titulo>Carros</Titulo>
            <ContainerInput>
                <Input
                    onChangeText={(busca) => buscar(busca)}
                    placeholder="Ache seu carro..."
                    placeholderTextColor={'#080D2D'}
                />
                <Image
                    source={imgSearch}
                    style={{ width: 18, height: 18 }}
                />
            </ContainerInput>
            <Text style={{width: '100%', textAlign: 'center', color: 'red'}}>{erro}</Text>
            <ScrollView style={{ width: '100%' }}>
                {
                    loading ?
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Image
                                source={imgLoading}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                        :
                        carros.map(carro => {
                            let { Marca, Modelo, Valor, CodigoFipe } = carro;
                            return <Carro key={CodigoFipe} marca={Marca} modelo={Modelo} preco={Valor}
                                verDetalhes={() => {
                                    navigation.navigate('Detalhes', {
                                        carro
                                    })
                                }}
                            />
                        })
                }
            </ScrollView>
        </Container>
    )
}

export default busca;
