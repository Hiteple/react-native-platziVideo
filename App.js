/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-native';

const App = () => {
  return (
    <Container>
      <Image
        style={{width: 300, height: 100}}
        source={require('./assets/logo.png')}
      />
      <Title>Welcome to react native!</Title>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
`;

export default App;
