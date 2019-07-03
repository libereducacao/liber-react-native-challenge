import React, { Component } from 'react';

import Busca from './busca';

export default class BuscaContainer extends Component {

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

    buscar(valorBusca) {
        let carrosFiltrados = this.state.carros.filter(carro => {
            return carro.Modelo.toLowerCase()
                .substr(0, carro.Modelo.indexOf('.') - 1)
                .includes(valorBusca.toLowerCase())
        })

        this.setState({ carrosFiltrados })
    }

    render() {
        return <Busca
            buscar={(busca) => this.buscar(busca)}
            carros={this.state.carrosFiltrados}
            navigation={this.props.navigation}
        />
    }
}
