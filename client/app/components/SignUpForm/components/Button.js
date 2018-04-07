import React from 'react';
import styled from 'styled-components';

export default class Button extends React.Component {
    render() {
        return (
            <BasicButton onClick={this.props.onClick} >{this.props.text}</BasicButton>
        );
    }
}


const BasicButton = styled.button`
  border: none;
  background-color: #3d70b2;
  color: white;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  font-size: 1.5rem;
`;
