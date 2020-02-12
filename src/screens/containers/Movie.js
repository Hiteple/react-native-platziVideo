import React from 'react';
import MovieLayout from '../components/MovieLayout';
import Header from '../../screens/components/Header';
import Player from '../../player/containers/Player';

const Movie = () => {
  return (
    <MovieLayout>
      <Header />
      <Player />
    </MovieLayout>
  );
};

export default Movie;
