import React from 'react';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
