import React from 'react';
import styled, { css } from 'styled-components';

export default (props) => (
    <Container>
        <Label>{props.label}</Label>
        <InputField {...props}/>
        {props.valid === false ?
            <ErrorMsg {...props}>{props.error}</ErrorMsg> :
            null
        }
    </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-bottom: 10px;
  position: relative;
`;

const InputField = styled.input`
  border: none;
  background-color: rgba(61,112,178,0.1);
  width: 100%;
  height: 2.5rem;
  padding: 4px;
  font-size: 1.5em;
  ${props => props.valid === true && css`
    border-style: solid;
    border-width: 0px 0px 4px 0px;
    border-color: #28a745;
  `}
  ${props => props.valid === false && css`
    border-style: solid;
    border-width: 0px 0px 4px 0px;
    border-color: #dc3545;
  `}

  @media (max-width: 1000px) {
    height: 1.7rem;
    font-size: 1em;
  }
`;

const Label = styled.label`
  font-size: 2em;
  margin-bottom: 5px;
  @media (max-width: 1000px) {
    font-size: 1.4em;
    margin-bottom: 3px;
  }
`;

const ErrorMsg = styled.p`
  width: 100%;
  height: 1rem;
  padding: 6px;
  color: red;
  font-size: 1.5em;
  ${props => props.valid && css`
   display: none;
  `}
  @media (max-width: 1000px) {
    font-size: 1em;
  }
`;

// const ValidIcon = styled.i`
//   height: 2.5rem;
//   width: 2.5rem;
//   position: absolute;
//   right: 0px;
//   top: 3.3rem;
//   ${props => props.valid === false && css`
//     background-image: url("/assets/img/close_128.svg");
//   `}
//   ${props => props.valid === true && css`
//     background-image: url("/assets/img/confirm_128.svg");
//   `}
// `;
