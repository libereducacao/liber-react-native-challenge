import React, { Component } from 'react';

import { Busca, Detalhes } from './views/carros'

import { createAppContainer, createStackNavigator } from 'react-navigation';


const StackNavigator = createStackNavigator({
  Busca: {
    screen: Busca,
    navigationOptions: {
      header: null,
    }
  },
  Detalhes: {
    screen: Detalhes,
    navigationOptions: {
      title: '',
    }
  },
},
)

let AppContainer = createAppContainer(StackNavigator);

export default class Home extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
