import * as React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#F6F7F9" barStyle="dark-content" />
      <Routes />
    </>
  );
}
