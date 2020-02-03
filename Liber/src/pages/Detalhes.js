import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Potencia from '../assets/pot.png';
import Starter from '../assets/starter.png';
import Gauge from '../assets/gauge.png';
import Car from '../assets/carro.png';
import Arrow from '../assets/arrow-down.png';

export default function Detalhes({navigation}) {
  const carro = navigation.getParam('carro');

  return (
    <View style={styles.fundo}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrow}>
        <Image source={Arrow} />
      </TouchableOpacity>
      <Text style={styles.detalhes}>Detalhes</Text>
      <View style={styles.card}>
        <Image style={styles.car} source={Car} />
        <Text style={styles.marcaTxt}>
          {carro.Marca} - {carro.Modelo.split(new RegExp('[0-9]\\.'))[0]} (
          {carro.AnoModelo})
        </Text>
        <Text style={styles.valorTxt}>
          {carro.Valor.split(' ')[0]}{' '}
          <Text style={{fontSize: 26}}>{carro.Valor.split(' ')[1]}</Text>
        </Text>

        <View style={styles.infos}>
          <View style={styles.infoView}>
            <Image style={styles.infoImg} source={Starter} />
            <Text style={[styles.titleTxt, {fontSize: 10}]}>COMBUSTÍVEL</Text>
            <Text style={styles.infoTxt}>{carro.Combustivel}</Text>
          </View>
          <View style={styles.infoView}>
            <Image style={styles.infoImg} source={Potencia} />
            <Text style={styles.titleTxt}>POTÊNCIA</Text>
            <Text style={styles.infoTxt}>Indisponível</Text>
          </View>
          <View style={styles.infoView}>
            <Image style={styles.infoImg} source={Gauge} />
            <Text style={styles.titleTxt}>CILINDRADAS</Text>
            <Text style={styles.infoTxt}>Indisponível</Text>
          </View>
        </View>

        <Text style={styles.fipe}>Codigo FIPE: {carro.CodigoFipe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    paddingHorizontal: 36,
    alignItems: 'flex-start',
  },
  arrow: {
    width: 50,
    height: 50,
    marginVertical: 35,
  },
  detalhes: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#080D2D',
    marginBottom: 33,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#003CFF1A',
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 9,
      height: 10,
    },
    elevation: 2,
  },
  car: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  marcaTxt: {
    fontSize: 18,
    color: '#080D2D',
    opacity: 0.7,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  valorTxt: {
    fontSize: 14,
    color: '#080D2D',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  infos: {
    flexDirection: 'row',
    marginVertical: 35,
    marginHorizontal: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  infoView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
  },
  infoImg: {
    margin: 2,
    alignSelf: 'center',
    marginBottom: 40,
  },
  titleTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080D2D',
    opacity: 0.5,
  },
  infoTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#080D2D',
  },
  fipe: {
    fontSize: 14,
    color: '#080D2D',
    opacity: 0.7,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
