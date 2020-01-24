import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    height: 152,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    marginRight: 20
  },
  infoContainer: {
    flexDirection: 'column',
    marginLeft: 20
    /*height: '100%',
    justifyContent: 'space-between'*/
  },

  transmissionInfoContainer: {
    borderRadius: 24,
    backgroundColor: '#EBEEFB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  transmissionInfoText: {
    fontFamily: 'OpenSans-Bold',
    color: '#25338D',
    fontSize: 10,
    lineHeight: 12,
    textTransform: 'uppercase',
    marginLeft: 6
  }
});

const TransmissionInfo = ({ type }) => (
  <View style={styles.transmissionInfoContainer}>
    <Image source={require('../assets/images/settings.png')} />
    <Text style={styles.transmissionInfoText}>{type || 'Sem info'}</Text>
  </View>
);

const componentName = ({ marca, modelo, transmission, preço }) => (
  <TouchableOpacity style={styles.container}>
    <Image style={styles.image} source={require('../assets/images/car.png')} />
    <View style={styles.infoContainer}>
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          color: 'rgba(8, 13, 45, 0.3)',
          fontSize: 12,
          lineHeight: 14,
          textTransform: 'uppercase'
        }}
      >
        {marca}
      </Text>
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          color: '#080D2D',
          fontSize: 16,
          lineHeight: 19
        }}
      >
        {modelo}
      </Text>
      <TransmissionInfo type={transmission} />
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          color: 'rgba(8, 13, 45, 0.3)',
          fontSize: 12,
          lineHeight: 14,
          textTransform: 'uppercase',
          marginTop: 14
        }}
      >
        Preço
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            color: '#475AD1',
            fontSize: 12,
            lineHeight: 14,
            textTransform: 'uppercase'
          }}
        >
          R$
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            color: '#475AD1',
            fontSize: 20,
            lineHeight: 24
          }}
        >
          {preço}
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            color: '#475AD1',
            fontSize: 12,
            lineHeight: 14,
            textTransform: 'uppercase'
          }}
        >
          ,00
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default componentName;
