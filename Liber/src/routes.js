import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Busca from './pages/Busca';
import Detalhes from './pages/Detalhes';

const MainNavigator = createStackNavigator(
  {
    Home: Busca,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
