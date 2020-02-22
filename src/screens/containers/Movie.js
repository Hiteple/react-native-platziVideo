import React, {useState, useEffect} from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Details from '../../videos/components/Details';
import {connect} from 'react-redux';
import {Animated} from 'react-native';

const Movie = props => {
  const [state] = useState({opacity: new Animated.Value(0)});
  const closeVideo = () => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {movie: null},
    });
  };

  useEffect(() => {
    Animated.timing(state.opacity, {
      toValue: 1,
      duration: 1200,
    }).start();

    return () => {};
  }, []);

  return (
    <Animated.View style={{flex: 1, opacity: state.opacity}}>
      <MovieLayout>
        <Player />
        <Details
          title={props.movie.title}
          descriptionFull={props.movie.description_full}
          cover={props.movie.medium_cover_image}
          trailer={props.movie.yt_trailer_code}
        />
      </MovieLayout>
    </Animated.View>
  );
};

const mapStateToProps = ({movie}) => {
  return {movie};
};

export default connect(mapStateToProps, null)(Movie);
