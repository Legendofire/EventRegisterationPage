import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export default class Spinner extends React.Component {
    render() {
        return (
            <Container> <Loader/> </Container>
        );
    }
}


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  background-color: rgba(129,160,199,0.8);
  color: black;
  height: 100%;
  width: 50%;
  font-size: 1.5rem;
  @media (max-width: 1000px) {
      width: 100%;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  position: absolute;
  top: calc(50% - 3em);
  left: calc(50% - 3em);
  border: 16px solid #dddddd;
  border-top: 16px solid #3d70b2;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: ${spin} 2s liner infinite;
`;
