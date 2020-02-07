import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Search,
  SearchContainer,
  IconContainer,
} from './styles';

import api from '../../services/api';

import CarItem from '../../components/CarItem';
import utilArray from '../../utils/utilArray';
import randomObject from '../../utils/randomObject';

export default function Main({ navigation }) {
  const [carModels, setCarModels] = useState([]);
  const [newCarModels, setNewCarModels] = useState([]);
  const [newSearch, setNewSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [codMark, setCodMark] = useState('');

  useEffect(() => {
    async function loadCars() {
      setLoading(true);
      const responseMark = await api.get('');
      const arrayMark = responseMark.data;
      const randomMark = randomObject(arrayMark);

      const responseModel = await api.get(`/${randomMark.codigo}/modelos`);
      setCodMark(randomMark.codigo);

      const listModels = responseModel.data.modelos;
      listModels.forEach(item => {
        item.modelo = utilArray(item.nome, 'model');
      });
      listModels.forEach(item => {
        item.marca = randomMark.nome;
      });
      listModels.forEach(item => {
        item.transmissao = utilArray(item.nome, 'transmission');
      });
      setCarModels(listModels);
      setLoading(false);
    }

    loadCars();
  }, []);

  function filterCars() {
    if (!search) {
      setNewSearch(false);
    } else {
      const filterItems = (needle, heystack) => {
        const query = needle.toLowerCase();
        return heystack.filter(
          item => item.modelo.toLowerCase().indexOf(query) >= 0
        );
      };
      setNewCarModels(filterItems(search, carModels));
      setNewSearch(true);
    }
  }

  useEffect(() => {
    filterCars();
  }, [search]); // eslint-disable-line

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          <SearchContainer>
            <Search
              placeholder="Ache seu carro..."
              placeholderTextColor="#080D2D"
              value={search}
              onChangeText={setSearch}
            />
            <IconContainer onPress={Keyboard.dismiss}>
              <Icon name="search" size={45} color="#080D2D" />
            </IconContainer>
          </SearchContainer>
          <List
            data={newSearch ? newCarModels : carModels}
            keyExtractor={item => String(item.codigo)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail', { item, codMark });
                }}
              >
                <CarItem data={item} navigation={navigation} />
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </Container>
  );
}
