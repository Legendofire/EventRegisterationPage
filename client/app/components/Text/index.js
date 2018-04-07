import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Body from './components/Body';

export default class Text extends React.Component {
    render() {
        return (
            <Container>
                <TextContainer>
                    <Header>
                        Chatbot on Pizza
                    </Header>
                    <Body>
                        Do you Enjoy <ImportantText>PIZZA?</ImportantText> Do you Enjoy Coding? Do you want to
                        learn how to make a chatbot? Come join us in our Chatbot
                        on Pizza workshop where we combine our love for pizza
                        and our passion for code.
                    </Body>
                </TextContainer>
            </Container>
        );
    }
}

const Container = styled.div`
  padding: 10px;
  grid-area: text;
  background-color: #212121;
  color: white;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: auto;
  margin-bottom: 200px;
  width: auto;
  @media (max-width: 1000px) {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 10px;
  }
`;

const ImportantText = styled.span`
  font-weight: bold;
  font-size: 0.9em;
`;

// const PizzaImage = styled.img`
//   height: 0.6em;
//   width: 0.6em;
//   border-radius: 50%;
// `;
