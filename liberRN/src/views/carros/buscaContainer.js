import React, { Component } from 'react';

import Busca from './busca';

const API_URL = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

export default class BuscaContainer extends Component {
    state = {
        carros: [],
        carrosFiltrados: [],
        loading: true,
        erro: '',
    }

    async componentDidMount() {
        const carros = await this.fetchCarros(); // Busca os carros na API

        this.setState({
            carros, carrosFiltrados: carros, loading: false, erro: ''
        });
    }

    async fetchCarros() {
        const carros = [];

        // Para buscar os carros, é preciso realizar diversas chamadas para API
        // A primeira busca as marcas (e aleatoriamente é escolhido uma)
        // A segunda busca os modelos (limitei para 5 modelos, pois algumas marcas tem dezenas de modelos)
        // Para cada modelo é buscado seu ano
        // A ultima chamada da API usa da marca, modelo, e ano do carro para saber seu valor, codigoFipe, etc.

        // Busca marca
        const marca = await this.fetchMarca();

        // Busca modelos
        const modelos = await this.fetchModelos(marca.codigo);

        // Itera sobre cada modelo
        for (let i = 0; i < modelos.length; i++) {
            // Busca ano de cada modelo
            const ano = await this.fetchAno(marca.codigo, modelos[i].codigo);

            // Busca o preço de cada carro e poe na variavel 'carros'
            const carro = await this.fetchCarro(marca.codigo, modelos[i].codigo, ano.codigo);

            carros.push(carro);
        }

        return carros;
    }

    async fetchMarca() {
        try {
            const responseMarcas = await fetch(`${API_URL}`);
            const marcas = await responseMarcas.json();
            const marca = marcas[Math.floor(Math.random() * marcas.length)];
            return marca;
        } catch (error) {
            this.setState({ erro: 'Não foi possível buscar as marcas', loading: false });
        }
    }

    async fetchModelos(marca) {
        try {
            const responseModelos = await fetch(`${API_URL}/${marca}/modelos`);
            let modelos = await responseModelos.json();
            modelos = modelos.modelos.slice(0, 4);
            return modelos;
        } catch (error) {
            this.setState({ erro: 'Não foi possível buscar os modelos', loading: false });
        }
    }

    async fetchAno(marca, modelo) {
        try {
            const responseAnos = await fetch(`${API_URL}/${marca}/modelos/${modelo}/anos`);
            const anos = await responseAnos.json();
            const ano = anos[Math.floor(Math.random() * anos.length)];
            return ano;
        } catch (error) {
            this.setState({ erro: 'Não foi possível buscar o ano do carro', loading: false });
        }
    }

    async fetchCarro(marca, modelo, ano) {
        try {
            const responseValor = await fetch(`${API_URL}/${marca}/modelos/${modelo}/anos/${ano}`);
            const carro = await responseValor.json();
            return carro;
        } catch (error) {
            this.setState({ erro: 'Não foi possível buscar as informações do carro', loading: false });
        }
    }

    buscar(valorBusca) {
        // Filtra todos os modelos que se encaixam na busca
        const carrosFiltrados = this.state.carros.filter(carro => carro.Modelo.toLowerCase()
            .substr(0, carro.Modelo.indexOf('.') - 1) // Retira as informações adicionais do modelo
            .includes(valorBusca.toLowerCase()));

        this.setState({ carrosFiltrados });
    }

    render() {
        return (
            <Busca
                buscar={busca => this.buscar(busca)}
                carros={this.state.carrosFiltrados}
                loading={this.state.loading}
                erro={this.state.erro}
                navigation={this.props.navigation}
            />
        );
    }
}
