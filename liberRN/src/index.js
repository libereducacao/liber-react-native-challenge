import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Busca, Detalhes } from './views/carros'

const StackNavigator = createStackNavigator({
  Busca: {
    screen: Busca,
    navigationOptions: {
      header: null,
    }
  },
  Detalhes: {
    screen: Detalhes
  },
},
)

let AppContainer = createAppContainer(StackNavigator);

export default class Index extends Component {
  render() {
    return <AppContainer />
  }
}
