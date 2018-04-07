import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import SignUpForm from './containers/SignUpForm';

export default class Form extends React.Component {
    render() {
        return (
            <ScrollContainer>
                <Container>
                    <Header />
                    <SignUpForm />
                </Container>
            </ScrollContainer>
        );
    }
}

const ScrollContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 1000px) {
    overflow: visible;
  }
`;

const Container = styled.div`
  padding: 10px;
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
  width: auto;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 1000px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;
