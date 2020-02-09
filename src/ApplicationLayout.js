import React, {useEffect} from 'react';
import Home from './screens/containers/Home';
import Header from './screens/components/Header';
import SuggestionsList from './videos/containers/SuggestionsList';
import CategoryList from './videos/containers/CategoryList';
import Player from './player/containers/Player';
import {Text} from 'react-native';

import {store} from '../store';

// API
import {getSuggestions, getMovies} from '../api';

const ApplicationLayout = () => {
  // Obtain data
  useEffect(() => {
    (async function() {
      // GET categories
      const categories = await getMovies();
      // Go to reducer
      store.dispatch({
        type: 'SET_CATEGORIES',
        payload: {categories},
      });

      // GET suggestions
      const suggestions = await getSuggestions(10);
      // Go to reducer
      store.dispatch({
        type: 'SET_SUGGESTIONS',
        payload: {suggestions},
      });
    })();
  }, []);

  return (
    <Home>
      <Header></Header>
      <Player />
      <Text>Aquí va el buscador</Text>
      <CategoryList />
      <SuggestionsList />
    </Home>
  );
};

export default ApplicationLayout;
