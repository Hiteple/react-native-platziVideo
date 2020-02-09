import React from 'react';
import styled from 'styled-components';

const PlayerWrapper = ({video, loader, loading, controls}) => {
  return (
    <Wrapper>
      <Container>{video}</Container>
      {loading && <Overlay>{loader}</Overlay>}
      {controls}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding-top: 56.25%;
`;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export default PlayerWrapper;
