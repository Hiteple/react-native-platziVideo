import React, {Component} from 'react';
import styled from 'styled-components';

const Empty = ({text}) => {
  return (
    <Container>
      <Message>{text}</Message>
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
`;

const Message = styled.Text`
  font-size: 16px;
`;

export default Empty;
