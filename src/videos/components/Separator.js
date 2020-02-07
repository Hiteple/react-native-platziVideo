import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Separator = ({color}) => {
  return <Border lineColor={color}></Border>;
};

const Border = styled.View`
  border-top-width: 1px;
  border-top-color: ${({lineColor}) => (lineColor ? lineColor : '#eaeaea')};
`;

export default Separator;
