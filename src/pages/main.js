import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import api from '../services/api';

import Carro from "../img/car.png";
import Automatico from "../img/lighting-button.png";
import Manual from "../img/settings.png";
import Search from "../img/search.png";

export default class Main extends Component {

    state = {
        carros: null,
        carrosFiltered: null
    };

    componentDidMount() {
        this.carregaCarros();
    }

    filtrarCarros(text){
        let carros = this.state.carros;

        if(text.length > 0){
            carros = this.state.carros.filter(({Marca, Modelo}) => {
                return (Marca == text || Modelo == text)
            });
        }

        this.setState({ carrosFiltered: carros })
    }

    carregaCarros = async () => {
        let modelosRaw = await api.get("1/modelos");
        let modelos = await modelosRaw.data.modelos;
        let anos = await modelosRaw.data.anos;
        const carros = [];

        Object.entries(anos).forEach(async (ano) => {

            Object.entries(modelos).forEach(async (modelo) => {

                try{
                    const carrosRaw = await api.get(`1/modelos/${modelo[1].codigo}/anos/${ano[1].codigo}`)
                    let carro = await carrosRaw.data;

                    carros.push(carro);
                }catch(error) {}
            });
        })

        this.setState({ carros: carros });
    };

    renderItem = ({ item }) => (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxContainer} onPress={() => 
                this.props.navigation.navigate('Detalhes', {
                    carro: item
                })}>

                <Image style={styles.car} source={Carro} />

                <View style={styles.box}>
                    <Text style={styles.boxContent}>{item.Modelo}</Text>
                    <Text style={styles.boxContent, styles.marca}>{item.Marca}</Text>
            
                    <Text>
                        <Image source={Automatico} /> Mecanico
                    </Text>
                    
                    <Text style={styles.boxLegend}>Preço</Text>
                    <Text style={styles.boxContent, styles.valor}>{item.Valor}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            < View style={styles.container}>
                < View style={styles.searchContainer}>
                        <TextInput  
                        style={styles.searchInput}
                        placeholder="Ache seu carro..."
                        onChangeText={(search) => this.filtrarCarros(search)}
                        value={this.state.search}
                        />
                        <Image style={styles.search} source={Search} />
                </View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.carrosFiltered || this.state.carros} 
                    keyExtractor={(marca => marca.Valor)}
                    renderItem={this.renderItem}n/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: "#EEE"
    },

    search: {
        flex: 1,
        alignContent: "flex-end",
        alignSelf: "flex-end",
        position: "absolute",
        marginTop: 15,
        // marginLeft: 100
    },

    marca: {
        fontWeight: "bold"
    },  

    searchInput: {
        borderColor: "#DDD",
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        color: "black",
        fontWeight: "bold",
        fontSize: 20,   
    },  

    car: {
        marginTop: 20,
        position: "absolute"
    },  

    boxContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 10,
        backgroundColor: "#FFF",
        borderWidth: 10,
        borderColor: "#EEE",
        borderRadius: 20
    },

    box: {
        marginBottom: 10,
        marginTop: 10,
        alignSelf: "flex-end",
        position: "relative",
        alignItems: "flex-start",
        padding: 10,
    },

    boxLegend: {
        color: "#AAA"
    },

    boxContent: {
        fontSize: 15
    },

    valor: {
        fontSize: 20,
        fontWeight: "bold"
    }
});