import React from 'react';
import styled from 'styled-components';

const CloseButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Cross>X</Cross>
    </TouchableOpacity>
  );
};

const Cross = styled.Text`
  font-weight: bold;
  color: #fff;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background-color: #70b124;
  border-radius: 12px;
  width: 25px;
  height: 25px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export default CloseButton;
