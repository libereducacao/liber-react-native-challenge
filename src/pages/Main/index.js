import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import {
  ScrollView, View, Text, TextInput, Image, ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import api from '../../services/api';
import Card from '../../components/Card';
import styles from './styles';

class Main extends Component {
  static propTypes = {
    navigation: shape({
      navigate: func,
    }).isRequired,
  };

  state = {
    modelos: [],
    modelosFiltrados: [],
    codigoMarca: '',
    error: '',
    loading: false,
    filtro: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await this.escolheMarca();
    await this.buscaAnoModelo();
    this.extraiDados();
    await this.extraiDemaisDados();
    this.setState({ loading: false });
  }

  filtraModelos = () => {
    const { modelos, loading, filtro } = this.state;

    if (loading) return;

    if (!filtro) {
      this.setState({ modelosFiltrados: [] });
      return;
    }

    const modelosFiltrados = modelos.filter(
      modelo => modelo.nome.toLowerCase().indexOf(filtro) !== -1,
    );

    this.setState({ modelosFiltrados });
  };

  escolheMarca = async () => {
    try {
      const { data } = await api.get('marcas');

      // Gera aleatório um index de uma marca
      const index = Math.floor(Math.random() * data.length + 1);

      this.setState({ codigoMarca: data[index].codigo });
    } catch (err) {
      this.setState({ error: 'Falha ao carregar as marcas', loading: false });
    }
  };

  buscaAnoModelo = async () => {
    const { codigoMarca } = this.state;

    try {
      const response1 = await api.get(`marcas/${codigoMarca}/modelos`);
      const { modelos } = response1.data;

      const modelosNovo = modelos.map(async (modelo) => {
        const response2 = await api.get(`marcas/${codigoMarca}/modelos/${modelo.codigo}/anos`);

        // Salva o ano do carro
        const ano = response2.data ? response2.data[0].codigo : 'Indisponível';

        return { ...modelo, ano };
      });

      const results = await Promise.all(modelosNovo);

      this.setState({ modelos: results, error: '' });
    } catch (err) {
      this.setState({ error: 'Falha ao carregar os modelos', loading: false });
    }
  };

  extraiDados = () => {
    const { modelos } = this.state;

    try {
      const modelosNovo = modelos.map((modelo) => {
        // Extrai cilindrada
        const strCilindra = modelo.nome.match(/\d+\.\d+/);
        const cilindrada = strCilindra ? strCilindra[0] : 'Indisponível';

        // Extrai nome do modelo
        const strModelo = modelo.nome.split(/\s\d+\.\d+/);
        const nomeModelo = strModelo ? strModelo[0] : modelo.nome;

        // Demais informacoes da string
        const rest = strModelo && strModelo[1] ? strModelo[1] : strModelo[0];

        // Extrai potencia
        const potencia = rest.match(/\d+\s?cv/) ? rest.match(/\d+\s?cv/)[0] : 'Indisponível';

        // Extrai cambio
        let cambio = null;
        if (rest.match(/mec/i)) {
          cambio = 'MANUAL';
        } else if (rest.match(/aut/i)) {
          cambio = 'AUTOMÁTICO';
        } else {
          cambio = null;
        }

        return {
          ...modelo,
          cilindrada,
          potencia,
          nome: nomeModelo,
          cambio,
        };
      });
      this.setState({ modelos: modelosNovo });
    } catch (err) {
      this.setState({ error: 'Falha ao acessar os dados', loading: false });
    }
  };

  extraiDemaisDados = async () => {
    const { modelos, codigoMarca } = this.state;

    try {
      const modelosNovo = modelos.map(async (modelo) => {
        const response = await api.get(
          `marcas/${codigoMarca}/modelos/${modelo.codigo}/anos/${modelo.ano}`,
        );

        const nomeMarca = response.data.Marca || 'Indisponível';
        const strValor = response.data.Valor.match(/[^R$\s]+/);
        const preco = strValor ? strValor[0].split(',')[0] : 'Indisponível';
        const combustivel = response.data.Combustivel || 'Indisponível';
        const fipe = response.data.CodigoFipe || 'Indisponível';

        return {
          ...modelo,
          marca: nomeMarca,
          preco,
          combustivel,
          fipe,
        };
      });

      const results = await Promise.all(modelosNovo);

      this.setState({ modelos: results });
    } catch (err) {
      this.setState({ error: 'Falha ao carregar informações adicionais', loading: false });
    }
  };

  render() {
    const {
      modelos, modelosFiltrados, filtro, error, loading,
    } = this.state;

    // Se tiver filtro, mostra valores filtrados
    let data = modelos;
    if (filtro) {
      data = modelosFiltrados;
    }

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#F6F7F9', '#F6F7F9', 'rgba(246, 247, 249, 0)']}>
          <View style={styles.header}>
            <Text style={styles.title}>Carros</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#080D2D"
                placeholder="Ache seu carro…"
                onChangeText={(text) => {
                  this.setState({ filtro: text });
                  this.filtraModelos();
                }}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Image source={require('../../assets/images/search.png')} />
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={styles.carList}>
          <Text style={styles.message}>{!!error && error}</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#1837e2" />
          ) : (
            <>
              {data.length !== 0 ? (
                <>
                  {data.map(modelo => (
                    <Card
                      key={modelo.codigo}
                      modelo={modelo}
                      onPress={() => navigation.navigate('Details', { modelo })}
                    />
                  ))}
                </>
              ) : (
                <Text style={styles.message}>Nenhum modelo encontrado</Text>
              )}
            </>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Main;
