import React from 'react';
import styled from 'styled-components';


export default class Header extends React.Component {
    render() {
        return (
            <Container>
                {this.props.text}
            </Container>
        );
    }
}


const Container = styled.div`
  padding: 10px;
  font-size: 3em;
  width: 100%;
  @media (max-width: 1000px) {
    font-size: 2em;
  }
`;
