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
import Header from './src/screens/components/Header';

const App = () => {
  return (
    <Home>
      <Header></Header>
      <Text>Aquí va el buscador</Text>
      <Text>Categorías</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};

export default App;
