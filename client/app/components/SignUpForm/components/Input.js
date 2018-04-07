import React from 'react';
import styled, { css } from 'styled-components';

export default (props) => (
    <Container>
        <Label>{props.label}</Label>
        <InputField {...props}/>
        <ErrorMsg {...props}>{props.error}</ErrorMsg>
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
  padding: 6px;
  font-size: 1.5em;
  ${props => props.valid && css`
    border-style: solid;
    border-width: 0px 0px 4px 0px;
    border-color: rgb(0,130,0);
  `}
  ${props => props.invalid && css`
    border-style: solid;
    border-width: 0px 0px 4px 0px;
    border-color: red;
  `}
`;

const Label = styled.label`
  font-size: 2em;
  margin-bottom: 5px;
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
`;

// const ValidIcon = styled.i`
//   height: 2.5rem;
//   width: 2.5rem;
//   position: absolute;
//   right: 0px;
//   top: 3.3rem;
//   ${props => props.invalid && css`
//     background-image: url("/assets/img/close_128.svg");
//   `}
//   ${props => props.valid && css`
//     background-image: url("/assets/img/confirm_128.svg");
//   `}
// `;
