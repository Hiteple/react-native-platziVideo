import React from 'react';
import styled from 'styled-components';

const CategoriesHeading = ({title, children}) => {
  return (
    <>
      <Container source={require('../../../assets/background.png')}>
        <Heading>{title}</Heading>
        {children}
      </Container>
    </>
  );
};

const Container = styled.ImageBackground`
  padding: 10px 30px;
`;

const Heading = styled.Text`
  color: #4c4c4c;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-left: -22px;
`;

export default CategoriesHeading;
