/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/screens/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import getSuggestions from './api/index';

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  // Obtain Suggestions
  useEffect(() => {
    (async function() {
      const suggestions = await getSuggestions(10);
      setSuggestions(suggestions);
      console.log(suggestions);
    })();
  }, []);

  return (
    <Home>
      <Header></Header>
      <Text>Aquí va el buscador</Text>
      <Text>Categorías</Text>
      <SuggestionsList list={suggestions.length > 0 ? suggestions : null} />
    </Home>
  );
};

export default App;
