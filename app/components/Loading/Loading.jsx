import React from 'react';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(245, 245, 245, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Loading extends React.Component {
  render() {
    return (
      <Wrapper>
        <GridLoader color="#B766B8" size={20} />
      </Wrapper>
    );
  }
}

export default Loading;
