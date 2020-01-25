import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Specs from './pages/specs';

const RootStack = createStackNavigator({ 
    Carros: {
        screen: Main,
    }, 
    Detalhes: {
        screen: Specs
    }
 });

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;