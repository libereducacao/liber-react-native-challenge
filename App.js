import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { getCarTypes } from './utils/treatData';
import Card from './components/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 34,
    paddingHorizontal: 36
  },
  heading: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 33,
    color: '#080D2D',
    lineHeight: 40,
    marginBottom: 31
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
    borderRadius: 13,
    marginBottom: 29
  },
  input: {
    flex: 1,
    height: 55,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 19,
    color: '#080D2D'
  }
});

const mock = [
  {
    AnoModelo: 32000,
    CodigoFipe: '079002-8',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.6 8V',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 42.645,00'
  },
  {
    AnoModelo: 2019,
    CodigoFipe: '079002-8',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.6 8V',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 33.712,00'
  },
  {
    AnoModelo: 2018,
    CodigoFipe: '079002-8',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.6 8V',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 31.298,00'
  },
  {
    AnoModelo: 2017,
    CodigoFipe: '079002-8',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.6 8V',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 28.747,00'
  },
  {
    AnoModelo: 2016,
    CodigoFipe: '079002-8',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.6 8V',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 26.764,00'
  },
  {
    AnoModelo: 32000,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 47.350,00'
  },
  {
    AnoModelo: 2019,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 37.245,00'
  },
  {
    AnoModelo: 2018,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 34.462,00'
  },
  {
    AnoModelo: 2017,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 31.467,00'
  },
  {
    AnoModelo: 2016,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 29.062,00'
  },
  {
    AnoModelo: 2015,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 27.909,00'
  },
  {
    AnoModelo: 2014,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 27.030,00'
  },
  {
    AnoModelo: 2013,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 26.077,00'
  },
  {
    AnoModelo: 2012,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 23.999,00'
  },
  {
    AnoModelo: 2011,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 22.986,00'
  },
  {
    AnoModelo: 2010,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 21.093,00'
  },
  {
    AnoModelo: 2009,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 19.055,00'
  },
  {
    AnoModelo: 2008,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 17.035,00'
  },
  {
    AnoModelo: 2007,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 15.495,00'
  },
  {
    AnoModelo: 2006,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 14.426,00'
  },
  {
    AnoModelo: 2005,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 13.115,00'
  },
  {
    AnoModelo: 2004,
    CodigoFipe: '079001-0',
    Combustivel: 'Gasolina',
    Marca: 'Fyber',
    MesReferencia: 'agosto de 2019 ',
    Modelo: 'Buggy 2000W 1.8 8V/ 1.8 8V Flex',
    SiglaCombustivel: 'G',
    TipoVeiculo: 1,
    Valor: 'R$ 11.544,00'
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };

    this.renderList = this.renderList.bind(this);
    this.splitString = this.splitString.bind(this);
    this.splitPrice = this.splitPrice.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    //const data = await getCarTypes();

    this.setState({
      fontLoaded: true
      //data
    });
  }

  splitString(modelo) {
    return modelo.split(' ', 2).join(' ');
  }

  splitPrice(price) {
    return price.split(' ')[1].split(',')[0];
  }

  renderList() {
    return (
      <FlatList
        data={mock}
        keyExtractor={(item, index) => `${item.AnoModelo}-${index}`}
        renderItem={({ item }) => (
          <Card
            marca={item.Marca}
            preço={this.splitPrice(item.Valor)}
            modelo={this.splitString(item.Modelo)}
          />
        )}
      />
    );
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <LinearGradient
          colors={['#F6F7F9', '#F6F7F9', '#F6F7F9']}
          style={styles.container}
        >
          <StatusBar hidden />
          <Text style={styles.heading}>Carros</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="Ache seu carro..." />
            <TouchableOpacity>
              <Image source={require('./assets/images/search.png')} />
            </TouchableOpacity>
          </View>
          {this.renderList()}
        </LinearGradient>
      );
    } else {
      return (
        <LinearGradient
          colors={['#F6F7F9', '#F6F7F9', '#F6F7F9']}
          style={[styles.container, { justifyContent: 'center' }]}
        >
          <StatusBar hidden />
          <ActivityIndicator />
        </LinearGradient>
      );
    }
  }
}
