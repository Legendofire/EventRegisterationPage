import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './components/Header';
import SignUpForm from './containers/SignUpForm';
import Congrats from './containers/Congrats';

class Form extends React.Component {
    render() {
        const { added } = this.props.form;
        const headerText = added ? "Thank you for Signing Up we will keep you updated." : "Want to Signup? Fill in your Details";
        return (
            <ScrollContainer>
                <Container>
                    <Header text={headerText} />
                    {added ? <Congrats /> : <SignUpForm /> }
                </Container>
            </ScrollContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    };
}

export default connect(mapStateToProps)(Form);

const ScrollContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 1000px) {
    overflow: visible;
    position: relative
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
