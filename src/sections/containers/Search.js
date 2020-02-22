import React, {useState} from 'react';
import styled from 'styled-components';
import {searchMovie} from '../../../api/index';
import {connect} from 'react-redux';

const Search = props => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    const movie = await searchMovie(text);

    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movie[0],
      },
    });

    props.navigation.navigate('Movie');
  };

  const handleChange = text => {
    setText(text);
  };

  return (
    <TextInput
      placeholder="Search for a movie"
      autoCorrect={false}
      autoCapitalize="none"
      onSubmitEditing={handleSubmit}
      onChange={handleChange}
    />
  );
};

const TextInput = styled.TextInput`
  padding: 15px;
  font-size: 15px;
  border: 1px solid #eaeaea;
`;

export default connect(null, null)(Search);
