import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Search from '../assets/search.png';

import CarItem from '../components/CarItem';

export default function Busca() {
  return (
    <View style={styles.fundo}>
      <Text style={styles.titulo}>Carros</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Ache seu carro..."
          placeholderTextColor="#080D2D"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <Image style={styles.searchImg} source={Search} />
      </View>
      <ScrollView style={styles.scroll}>
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    padding: 35,
  },
  titulo: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#080D2D',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 13,
    marginVertical: 30,
    paddingHorizontal: 21,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
