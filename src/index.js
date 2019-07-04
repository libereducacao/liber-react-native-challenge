import React from 'react';
import { StatusBar } from 'react-native';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#233499" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
