import React from 'react';
import { string, shape, func } from 'prop-types';
import {
  Image, View, TouchableOpacity, Text,
} from 'react-native';
import styles from './styles';

const Card = ({ modelo, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress()}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../../assets/images/car.png')} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.subTitle}>{modelo.marca || 'Indisponível'}</Text>
      <Text numberOfLines={1} style={styles.title}>
        {modelo.nome || 'Indisponível'}
      </Text>
      <View style={styles.tag}>
        {!!modelo.cambio && (
          <>
            {modelo.cambio === 'MANUAL' ? (
              <Image source={require('../../assets/images/settings.png')} />
            ) : (
              <Image source={require('../../assets/images/lighting.png')} />
            )}
            <Text style={styles.cambio}>{modelo.cambio}</Text>
          </>
        )}
      </View>
      <Text style={styles.subTitle}>PREÇO</Text>
      <View style={styles.precoContainer}>
        {modelo.preco ? (
          <>
            <Text style={styles.precoSecondary}>R$ </Text>
            <Text style={styles.precoPrimary}>{modelo.preco}</Text>
            <Text style={styles.precoSecondary}>,00</Text>
          </>
        ) : (
          <Text style={styles.precoSecondary}>Indisponível</Text>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

Card.propTypes = {
  modelo: shape({
    nome: string,
    marca: string,
    cambio: string,
    preco: string,
  }).isRequired,
  onPress: func.isRequired,
};

export default Card;
