import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Details from './pages/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Carros',
            cardStyle: {backgroundColor: '#F6F7F9'},
            headerStyle: {backgroundColor: '#F6F7F9', elevation: 0},
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes',
            cardStyle: {backgroundColor: '#F6F7F9'},
            headerStyle: {backgroundColor: '#F6F7F9', elevation: 0},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
