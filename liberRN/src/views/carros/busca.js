import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-remote-svg'

import imgSearch from '../../assets/img/search.svg';

import { Titulo, Container, ContainerInput, Input } from '../../styled-components'
import Carro from '../../components/carro'

export default class Busca extends Component {

    state = {
        carros: [],
        carrosFiltrados: []
    }

    async componentDidMount() {
        let carros = await this.fetchCarros();

        this.setState({ carros, carrosFiltrados: carros })
    }

    async fetchCarros() {
        let carros = [];
        try {
            let responseMarcas = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            let marcas = await responseMarcas.json();
            let marca = marcas[Math.floor(Math.random() * marcas.length)];

            let responseModelos = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos`)
            let modelos = await responseModelos.json();
            modelos = modelos.modelos.slice(0, 4)

            for (let i = 0; i < modelos.length; i++) {
                try {
                    let responseAnos = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos/${modelos[i].codigo}/anos`)
                    let anos = await responseAnos.json();
                    let ano = anos[Math.floor(Math.random() * anos.length)];

                    let responseValor = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos/${modelos[i].codigo}/anos/${ano.codigo}`)
                    let carro = await responseValor.json();

                    carros.push(carro);
                } catch (error) {
                    console.log(error)
                }
            }

            return carros;
        } catch (error) {
            console.log(error)
        }
    }

    buscar(valorBusca){

        let carrosFiltrados = this.state.carros.filter(carro =>{
            return carro.Modelo.toLowerCase().includes(valorBusca.toLowerCase())
        })

        this.setState({carrosFiltrados})
    }

    render() {
        return (
            <Container>
                <Titulo>Carros</Titulo>
                <ContainerInput>
                    <Input
                        onChangeText={(busca) => this.buscar(busca)}
                        placeholder="Ache seu carro..."
                        placeholderTextColor={'#080D2D'}
                    />
                    <Image
                        source={imgSearch}
                        style={{ width: 18, height: 18 }}
                    />
                </ContainerInput>
                <View style={{ marginBottom: 50 }}>
                    {
                        this.state.carrosFiltrados.length === 0 ?
                            <Text>Carregando...</Text> :
                            this.state.carrosFiltrados.map(carro => {
                                let { Marca, Modelo, Valor, CodigoFipe} = carro;
                                return <Carro key={CodigoFipe} marca={Marca} modelo={Modelo} preco={Valor} verDetalhes={() => {
                                    this.props.navigation.navigate('Detalhes',{
                                        carro
                                    })
                                }} />
                            })
                    }
                </View>
            </Container>
        )
    }
}
