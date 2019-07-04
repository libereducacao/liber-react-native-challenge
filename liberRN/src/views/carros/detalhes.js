import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image from 'react-native-remote-svg';

import { Titulo, ScrollContainer } from '../../styled-components';
import {
  FotoCarro, InformacoesCarro, ModeloCarro, ContainerMotorCarro
} from '../../styled-components/carro';

import ItemMotorCarro from '../../components/itemMotorCarro';
import imgCarro from '../../assets/img/car.svg';
import imgVelocimentro from '../../assets/img/gauge.svg';
import imgMotorArranque from '../../assets/img/starter.svg';
import imgPeça from '../../assets/img/part.svg';

export default class detalhes extends Component {
  render() {
    let {
      Marca, Modelo, AnoModelo: Ano, Combustivel, Valor, CodigoFipe
    } = this.props.navigation.getParam('carro');
    Valor = Valor.split(' '); // Retira o 'R$' de valor

    // Atraves de uma expressao regular é procurado a potencia do carro, caso nao encontrado, a informacao será 'Indisponível'
    const regexPotencia = /([0-9]{2,4})cv/g;
    let Potencia = Modelo.match(regexPotencia);
    Potencia === null ? Potencia = 'Indisponível' : '';

    // Atraves de uma expressao regular é procurado e calculado as cilindradas do carro, caso nao encontrado, a informacao será 'Indisponível'
    // Exemplo, um carro 1.0 tem 1000 cilindradas, 1.4 tem 1400, 1.6 tem 1600, é sempre o numero multiplicado por 1000
    const regexCC = /[0-9]\.[0-9]/g;
    let CC = Modelo.match(regexCC);
    CC === null ? CC = 'Indisponível' : CC = (parseFloat(CC) * 1000).toLocaleString();

    // Retira as informações extras que o modelo traz, cortando a string baseado nas cilindradas (1.0, 1.4, 1.6, etc)
    // Caso o modelo nao possua essa informação, fica dificil saber aonde começa as informações adicionais, portanto, nada é feito com a string
    Modelo.indexOf('.') === -1 ? '' : Modelo = Modelo.substr(0, Modelo.indexOf('.') - 1);

    return (
      <ScrollContainer style={{ paddingTop: 5 }}>
        <Titulo>Detalhes</Titulo>
        <View style={styles.shadow}>
          <FotoCarro>
            <Image
              source={imgCarro}
              style={{ width: 300, height: 180 }}
            />
          </FotoCarro>
          <InformacoesCarro>
            <ModeloCarro style={{ fontSize: 18, opacity: 0.7 }}>
              {Marca}
              {' '}
              -
              {' '}
              {Modelo}
              {' '}
              (
              {Ano}
              )
            </ModeloCarro>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={styles.valor}>
                {Valor[0]}
              </Text>
              <Text style={[styles.valor, { fontSize: 26, marginLeft: 5 }]}>
                {Valor[1]}
                *
              </Text>
            </View>
            <ContainerMotorCarro>
              <ItemMotorCarro
                icone={imgMotorArranque}
                label="COMBUSTÍVEL"
                texto={Combustivel}
              />
              <ItemMotorCarro
                icone={imgPeça}
                label="POTÊNCIA"
                texto={Potencia}
              />
              <ItemMotorCarro
                icone={imgVelocimentro}
                label="CILINDRADAS"
                texto={CC}
              />

            </ContainerMotorCarro>
            <Text style={{
              fontFamily: 'sans-serif', fontSize: 14, color: '#080D2D', opacity: 0.7
            }}
            >
              Código FIPE:
              {CodigoFipe}
            </Text>
          </InformacoesCarro>
        </View>
      </ScrollContainer>
    );
  }
}

let styles = StyleSheet.create({
  valor: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#080D2D',
    fontWeight: 'bold'
  },
  shadow: {
    padding: 20,
    paddingTop: 0,
    marginBottom: 50,
    borderRadius: 20,
    backgroundColor: '#FFF',
    elevation: 3,
    shadowColor: '#003CFF',
    shadowRadius: 20,
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
});
