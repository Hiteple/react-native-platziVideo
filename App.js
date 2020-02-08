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
import CategoryList from './src/videos/containers/CategoryList';
import {getSuggestions, getMovies} from './api/index';

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [categories, setCategories] = useState([]);

  // Obtain Suggestions
  useEffect(() => {
    (async function() {
      // GET
      const suggestions = await getSuggestions(10);
      const categories = await getMovies();

      // SET
      setSuggestions(suggestions);
      setCategories(categories);
    })();
  }, []);

  return (
    <Home>
      <Header></Header>
      <Text>Aquí va el buscador</Text>
      <Text>Categorías</Text>
      <CategoryList categoryList={categories} />
      <SuggestionsList suggestionList={suggestions} />
    </Home>
  );
};

export default App;
