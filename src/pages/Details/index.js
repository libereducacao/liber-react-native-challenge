import React from 'react';
import { shape, func } from 'prop-types';

import {
  View, ScrollView, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

const Details = ({ navigation }) => {
  const modelo = navigation.getParam('modelo', null);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Main')}>
            <Image source={require('../../assets/images/back.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>Detalhes</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              resizeMethod="resize"
              source={require('../../assets/images/car.png')}
            />
          </View>
          <Text style={styles.modelo}>
            {modelo.marca} - {modelo.nome} ({modelo.ano.substring(0, 4)})
          </Text>
          <View style={styles.precoContainer}>
            <Text style={styles.precoSecondary}>R$ </Text>
            <Text style={styles.precoPrimary}>{modelo.preco},00*</Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardItem}>
              <View style={styles.card}>
                <Image source={require('../../assets/images/starter.png')} />
              </View>
              <Text style={styles.cardName}>Combustível</Text>
              <Text style={styles.cardValue}>{modelo.combustivel}</Text>
            </View>
            <View style={styles.cardItem}>
              <View style={styles.card}>
                <Image source={require('../../assets/images/potencia.png')} />
              </View>
              <Text style={styles.cardName}>Pontência</Text>
              <Text style={styles.cardValue}>{modelo.potencia}</Text>
            </View>
            <View style={styles.cardItem}>
              <View style={styles.card}>
                <Image source={require('../../assets/images/gauge.png')} />
              </View>
              <Text style={styles.cardName}>cilindradas</Text>
              <Text style={styles.cardValue}>{parseFloat(modelo.cilindrada).toFixed(3)}</Text>
            </View>
          </View>
          <Text style={styles.codigo}>Código FIPE: {modelo.fipe}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

Details.propTypes = {
  navigation: shape({
    navigate: func,
  }).isRequired,
};

export default Details;
