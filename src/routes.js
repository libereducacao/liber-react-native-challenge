import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Routes = createAppContainer(
  createStackNavigator(
    { Main, Details },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
    },
  ),
);

export default Routes;
