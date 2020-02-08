import React from 'react';
import styled from 'styled-components';

const Category = ({genres, background_image}) => {
  return (
    <Wrapper source={{uri: background_image}}>
      <Genre>{genres[0]}</Genre>
    </Wrapper>
  );
};

const Wrapper = styled.ImageBackground`
  width: 250px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Genre = styled.Text`
  color: #fff;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: bold;
  text-shadow: 2px 2px 10px #000;
`;

export default Category;
