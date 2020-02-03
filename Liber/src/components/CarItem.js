import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Car from '../assets/car.png';
import Settings from '../assets/settings.png';
import Lighting from '../assets/lighting-button.png';

export default function CarItem({carro, navigation}) {
  const info = carro.item;

  const Cambio = () => {
    if (info.Modelo.includes('Aut')) {
      return (
        <View style={styles.cambioView}>
          <Image source={Lighting} />
          <Text style={styles.cambioTxt}>AUTOMÁTICO</Text>
        </View>
      );
    } else if (info.Modelo.includes('Mec')) {
      return (
        <View style={styles.cambioView}>
          <Image source={Settings} />
          <Text style={styles.cambioTxt}>MANUAL</Text>
        </View>
      );
    }
    return <View />;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalhes', {carro: carro.item})}
      style={styles.carro}>
      <Image source={Car} />
      <View style={styles.infoCarro}>
        <Text style={styles.marcaTxt}>{info.Marca}</Text>
        <Text style={styles.modeloTxt}>
          {info.Modelo.split(new RegExp('[0-9]\\.'))[0]}
        </Text>
        {Cambio()}
        <Text style={styles.marcaTxt}>PREÇO</Text>
        <View style={styles.precoView}>
          <Text style={styles.precoTxt}>{info.Valor.split(' ')[0]} </Text>
          <Text style={[styles.precoTxt, {fontSize: 20}]}>
            {info.Valor.split(' ')[1].split(',')[0]}
          </Text>
          <Text style={styles.precoTxt}>
            ,{info.Valor.split(' ')[1].split(',')[1]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  carro: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  infoCarro: {
    margin: 20,
  },
  marcaTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080D2D',
    opacity: 0.3,
    marginBottom: 5,
  },
  modeloTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#080D2D',
    marginBottom: 5,
  },
  cambioView: {
    backgroundColor: '#EBEEFB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 24,
    marginBottom: 15,
  },
  cambioTxt: {
    fontSize: 10,
    color: '#25338D',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  precoView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  precoTxt: {
    color: '#475AD1',
    fontSize: 12,
    fontWeight: 'bold',
    margin: 1,
  },
});
