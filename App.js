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
import SuggestionsList from './src/videos/containers/SuggestionsList';

const App = () => {
  return (
    <Home>
      <Header></Header>
      <Text>Aquí va el buscador</Text>
      <Text>Categorías</Text>
      <SuggestionsList />
    </Home>
  );
};

export default App;
