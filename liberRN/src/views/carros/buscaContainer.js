import React, { Component } from 'react';

import Busca from './busca';

export default class BuscaContainer extends Component {

    state = {
        carros: [],
        carrosFiltrados: [],
        loading: true,
    }

    async componentDidMount() {
        let carros = await this.fetchCarros(); //Busca os carros na API

        this.setState({ carros, carrosFiltrados: carros, loading: false })
    }

    async fetchCarros() {
        let carros = [];

        //Para buscar os carros, é preciso realizar diversas chamadas para API
        //A primeira busca as marcas (e aleatoriamente é escolhido uma)
        //A segunda busca os modelos (limitei para 5 modelos, pois algumas marcas tem dezenas de modelos)
        //Para cada modelo é buscado seu ano
        //A ultima chamada da API usa da marca, modelo, e ano do carro para saber seu valor, codigoFipe, etc.

        try {
            //Busca marca
            let responseMarcas = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            let marcas = await responseMarcas.json();
            let marca = marcas[Math.floor(Math.random() * marcas.length)];

            //Busca modelos
            let responseModelos = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos`)
            let modelos = await responseModelos.json();
            modelos = modelos.modelos.slice(0, 4)

            for (let i = 0; i < modelos.length; i++) {
                try {
                    //Busca ano de cada modelo
                    let responseAnos = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos/${modelos[i].codigo}/anos`)
                    let anos = await responseAnos.json();
                    let ano = anos[Math.floor(Math.random() * anos.length)];

                    //Busca o preço de cada carro e poe na variavel 'carros'
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
        //Filtra todos os modelos que se encaixam na busca
        let carrosFiltrados = this.state.carros.filter(carro => {
            return carro.Modelo.toLowerCase()
                .substr(0, carro.Modelo.indexOf('.') - 1) //Retira as informações adicionais do modelo
                .includes(valorBusca.toLowerCase())
        })

        this.setState({ carrosFiltrados })
    }

    render() {
        return <Busca
            buscar={(busca) => this.buscar(busca)}
            carros={this.state.carrosFiltrados}
            loading={this.state.loading}
            navigation={this.props.navigation}
        />
    }
}
