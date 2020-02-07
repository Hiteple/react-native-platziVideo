/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';

const App = () => {
  return (
    <Home>
      <Text>Aquí va el header</Text>
      <Text>Aquí va el buscador</Text>
      <Text>Categorías</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};

export default App;
