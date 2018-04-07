import React from 'react';
import styled from 'styled-components';

import Form from '../SignUpForm';
import Text from '../Text';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Form />
                <Text />
            </Container>
        );
    }
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  font-family: "IBM Plex Sans";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "form text";
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "text"
                         "form";
  }
`;
