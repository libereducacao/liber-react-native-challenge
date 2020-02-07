import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Detail from './pages/Detail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Carros',
        },
      },
      Detail: {
        screen: Detail,
        navigationOptions: {
          title: 'Detalhe',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: '#080D2D',
        headerTitleAlign: 'center', // Precisa apenas para Android
        headerBackTitleVisible: null,
        // headerStyle: {
        //   backgroundColor: '#F6F7F9',
        // },
        headerTitleStyle: {
          fontSize: 33,
        },
      },
    }
  )
);

export default Routes;
