import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import api from '../services/api';

import Search from '../assets/search.png';

import CarItem from '../components/CarItem';

export default function Busca({navigation}) {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [marcas, setMarcas] = useState([1]);
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    async function loadMarcas() {
      const response = await api.get('/carros/marcas');
      setMarcas(
        response.data.map(marca => {
          return marca.codigo;
        }),
      );
    }

    loadMarcas();
  }, []);

  //Atualiza os modelos disponiveis de cada marca a cada vez que o FlatList chega ao fim
  useEffect(() => {
    async function loadCarros() {
      setLoading(true);
      let number = marcas[page];

      const res = await api.get(`/carros/marcas/${number}/modelos`);
      const resModelos = res.data.modelos;
      const resAnos = res.data.anos;

      resAnos.map(ano => {
        resModelos.map(async modelo => {
          let resCarro;
          try {
            resCarro = await api.get(
              `/carros/marcas/${number}/modelos/${modelo.codigo}/anos/${
                ano.codigo
              }`,
            );

            setCarros(prevValue =>
              prevValue.includes(resCarro.data)
                ? prevValue
                : prevValue.concat(resCarro.data),
            );
          } catch (erro) {}
        });
      });

      setLoading(false);
    }

    loadCarros();
  }, [marcas, page]);

  //efeito de loading ao fim do FlatList
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

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
      <FlatList
        data={carros}
        style={styles.scroll}
        renderItem={item => <CarItem carro={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => setPage(prevValue => prevValue + 1)}
        onEndReachedThreshold={0.25}
        ListFooterComponent={renderFooter}
        disableVirtualization
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    padding: 35,
    paddingBottom: 0,
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
