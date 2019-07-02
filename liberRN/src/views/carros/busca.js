import React, { Component } from 'react';
import { View } from 'react-native';
import Image from 'react-native-remote-svg'

import imgSearch from '../../assets/img/search.svg';

import { Titulo, Container, ContainerInput, Input } from '../../styled-components'
import Carro from '../../components/carro'


export default class Busca extends Component {

    render() {
        return (
            <Container>
                <Titulo>Carros</Titulo>
                <ContainerInput>
                    <Input
                        placeholder="Ache seu carro..."
                        placeholderTextColor={'#080D2D'}
                    />
                    <Image
                        source={imgSearch}
                        style={{ width: 18, height: 18 }}
                    />
                </ContainerInput>
                <View style={{marginBottom: 50}}>
                    <Carro marca="MARCA" modelo="MODELO" cambio="MANUAL" preco="32.000,00" verDetalhes={() => this.props.navigation.navigate('Detalhes')} />
                    <Carro marca="Ford" modelo="Fusion" cambio="AUTOMÁTICO" preco="59.990,00" verDetalhes={() => this.props.navigation.navigate('Detalhes')} />
                    <Carro marca="Ford" modelo="Fusion" cambio="AUTOMÁTICO" preco="59.990,00" verDetalhes={() => this.props.navigation.navigate('Detalhes')} />
                </View>
            </Container>
        )
    }
}
