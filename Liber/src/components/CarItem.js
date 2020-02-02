import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Car from '../assets/car.png';
import Settings from '../assets/settings.png';

export default function CarItem() {
  return (
    <View style={styles.carro}>
      <Image source={Car} />
      <View style={styles.infoCarro}>
        <Text style={styles.marcaTxt}>MARCA</Text>
        <Text style={styles.modeloTxt}>Modelo</Text>
        <View style={styles.cambioView}>
          <Image source={Settings} />
          <Text style={styles.cambioTxt}>MANUAL</Text>
        </View>
        <Text style={styles.marcaTxt}>PREÇO</Text>
        <View style={styles.precoView}>
          <Text style={styles.precoTxt}>R$</Text>
          <Text style={[styles.precoTxt, {fontSize: 20}]}>49.571</Text>
          <Text style={styles.precoTxt}>,00</Text>
        </View>
      </View>
    </View>
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
