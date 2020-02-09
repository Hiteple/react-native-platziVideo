/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/screens/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import CategoryList from './src/videos/containers/CategoryList';
import Player from './src/player/containers/Player';
import {Provider} from 'react-redux';

// Persistent store
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

import {getSuggestions, getMovies} from './api/index';

const App = () => {
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
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <Home>
          <Header></Header>
          <Player />
          <Text>Aquí va el buscador</Text>
          <CategoryList />
          <SuggestionsList />
        </Home>
      </PersistGate>
    </Provider>
  );
};

export default App;
