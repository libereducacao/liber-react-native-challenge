import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import api from '../../services/api';

import {Container} from './styles';

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      const {data} = await api.get('carros/marcas');
      setCars(data);
    }
    getCars();
  }, []);

  return (
    <Container>
      <FlatList
        data={cars}
        renderItem={({item}) => (
          <View>
            <Text>{item.codigo}</Text>
          </View>
        )}
        keyExtractor={item => item.codigo}
      />
    </Container>
  );
}
