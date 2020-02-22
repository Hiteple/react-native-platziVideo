import React, {useEffect} from 'react';
import Home from './screens/containers/Home';
import SuggestionsList from './videos/containers/SuggestionsList';
import CategoryList from './videos/containers/CategoryList';
import Movie from './screens/containers/Movie';
import Search from './sections/containers/Search';

import {connect} from 'react-redux';

// API
import {getSuggestions, getMovies} from '../api';

const ApplicationLayout = props => {
  // Obtain data
  useEffect(() => {
    (async function() {
      // GET categories
      const categories = await getMovies();
      // Go to reducer
      props.dispatch({
        type: 'SET_CATEGORIES',
        payload: {categories},
      });

      // GET suggestions
      const suggestions = await getSuggestions(10);
      // Go to reducer
      props.dispatch({
        type: 'SET_SUGGESTIONS',
        payload: {suggestions},
      });
    })();
  }, []);

  return (
    <Home>
      <Search navigation={props.navigation} />
      <CategoryList />
      <SuggestionsList navigation={props.navigation} />
    </Home>
  );
};

const mapStateToProps = ({movie}) => {
  return {selectedMovie: movie};
};

export default connect(mapStateToProps, null)(ApplicationLayout);
