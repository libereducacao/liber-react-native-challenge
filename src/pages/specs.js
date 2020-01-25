import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Carro from "../img/car.png";
import Starter from "../img/starter.png";
import Air from "../img/air.png";
import Gauge from "../img/gauge.png";

export default class Main extends Component {

    render() {
        const { navigation } = this.props;
        const carro = navigation.getParam('carro');

        return (
            <View style={styles.container}>
                <View style={styles.carContainer}>
                    <Image style={styles.car} source={Carro} />
                    <Text style={styles.title}>{carro.Marca} - {carro.Modelo.slice(0,9).replace(/[0-9]/g, "").trim()} ({carro.AnoModelo})</Text>
                    <Text style={{fontSize: 26, fontWeight: "bold"}}>{carro.Valor}</Text>

                    <View style={styles.boxContainer}>
                        <View style={styles.box}>
                            <Image source={Starter} style={styles.boxImage}></Image>
                            <Text style={styles.boxTitle}>COMBUSTÍVEL</Text>
                            <Text style={styles.boxContent}>{carro.Combustivel}</Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={Air} style={styles.boxImage}></Image>
                            <Text style={styles.boxTitle}>POTÊNCIA</Text>
                            <Text style={styles.boxContent}>-</Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={Gauge} style={styles.boxImage}></Image>
                            <Text style={styles.boxTitle}>CILINDRADAS</Text>
                            <Text style={styles.boxContent}>-</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.footer}>Código FIPE: {carro.CodigoFipe}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F7F9"
    },

    carContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        shadowColor: "#003CFF1A",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20
    },

    boxContainer: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "center",
    },

    box: {
        flex: 1,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "#fff",
        width: 150,
        height: 100,
        backgroundColor: "#003CFF1A",
        paddingTop: 10
    },

    boxTitle: {
        marginTop: 20,
        color: "#080D2D",
        fontWeight: "bold",
        opacity: 0.3,
        alignSelf: "center",
    },

    boxContent: {
        fontWeight: "bold",
        alignSelf: "center"
    },

    boxImage: {
        alignSelf: "center",
        width: 40,
        height: 40,
    },

    car: {
        width: 320,
        height: 240,
        marginBottom: 30
    },

    title: {
        fontSize: 18,
        justifyContent: "center",
        color: "#aaa"
    },

    footer: {
        marginTop: "20%",
        fontSize: 20,
        color: "#AAA",
        opacity: 1,
    }
});