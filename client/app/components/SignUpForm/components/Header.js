import React from 'react';
import styled from 'styled-components';


export default class Header extends React.Component {
    render() {
        return (
            <Container>
                Fill in your details.
            </Container>
        );
    }
}


const Container = styled.div`
  padding: 10px;
  font-size: 3em;
  width: 100%;
`;
