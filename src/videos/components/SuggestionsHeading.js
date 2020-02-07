import React from 'react';
import styled from 'styled-components';

const SuggestionsHeading = ({title, children}) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {children}
    </Container>
  );
};

const Container = styled.View`
  padding: 10px 0;
  flex: 1;
`;

const Heading = styled.Text`
  color: #4c4c4c;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 8px;
`;

export default SuggestionsHeading;
