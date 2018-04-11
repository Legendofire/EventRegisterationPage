import React from 'react';
import styled, { css } from 'styled-components';

export default class Button extends React.Component {
    render() {
        return (
            <BasicButton {...this.props}> {this.props.text} </BasicButton>
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
  ${props => props.disable && css`
      background-color: #81A0C7;
  `}
`;
