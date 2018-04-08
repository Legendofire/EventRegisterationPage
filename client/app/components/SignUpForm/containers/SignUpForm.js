import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ADD_USER, CHANGE_INPUT } from '../formActions';
import Input from '../components/Input';
import Button from '../components/Button';

class SignUpForm extends React.Component {
    // generateForm(){
    //
    // }
    render() {
        console.log(this.props);
        return (
            <Container>
                <Form>
                    <Input type="text"
                        name="reason"
                        value={this.props.form.user.reason}
                        placeholder="Please enter a brief answer."
                        onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                        label="Why do you want to attend?*" />
                </Form>
                <ButtonContainer>
                    <Button text="Sign Up" onClick={() => this.props.handleSubmit(this.props.form.user)} />
                </ButtonContainer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        handleSubmit: ADD_USER,
        handleChange: CHANGE_INPUT
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpForm);

const Container = styled.div`
  padding: 10px;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  width: 33%;
  height: 3rem;
`;
