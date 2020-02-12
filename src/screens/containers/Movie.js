import React from 'react';
import MovieLayout from '../components/MovieLayout';
import Header from '../../screens/components/Header';
import Player from '../../player/containers/Player';
import CloseButton from '../../sections/components/CloseButton';
import Details from '../../videos/components/Details';
import {connect} from 'react-redux';

const Movie = props => {
  const closeVideo = () => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {movie: null},
    });
  };

  return (
    <MovieLayout>
      <Header>
        <CloseButton onPress={closeVideo} />
      </Header>
      <Player />
      <Details
        title={props.movie.title}
        descriptionFull={props.movie.description_full}
        cover={props.movie.medium_cover_image}
        trailer={props.movie.yt_trailer_code}
      />
    </MovieLayout>
  );
};

const mapStateToProps = ({movie}) => {
  return {movie};
};

export default connect(mapStateToProps, null)(Movie);
