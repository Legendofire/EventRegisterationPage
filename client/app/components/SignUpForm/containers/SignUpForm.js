import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ADD_USER, CHANGE_INPUT } from '../formActions';
import Input from '../components/Input';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

const formSchema = [
    {
        name: "email",
        type: "text",
        placeholder: "Please enter your Email.",
        label: "Email*"
    },
    {
        name: "name",
        type: "text",
        placeholder: "Please enter your Name.",
        label: "Name*"
    },
    {
        name: "phone",
        type: "text",
        placeholder: "Please enter your Phone.",
        label: "Phone*"
    },
    {
        name: "startup",
        type: "text",
        placeholder: "Please enter your Startup Name.",
        label: "Startup Name"
    },
    {
        name: "reason",
        type: "text",
        placeholder: "Please enter a brief Answer.",
        label: "Why do you want to attend?*"
    }
];

class SignUpForm extends React.Component {
    generateForm() {
        return formSchema.map((element) => {
            const { valid, error, value } = this.props.form.form[element.name];
            return (<Input
                key={element.name}
                {...element}
                onChange = {(e) => this.props.handleChange(e.target.name, e.target.value)}
                value = {value}
                valid = {valid}
                error = {valid ? false : error}
            />);
        });
    }
    render() {
        const disable = !this.props.form.allValid;
        const spinner = this.props.form.adding;
        return (
            <Container>
                <Form>
                    {this.generateForm()}
                </Form>
                <ButtonContainer>
                    <Button disable={disable} text="Sign Up" onClick={() => this.props.handleSubmit(this.props.form.form, this.props.form.allValid)} />
                </ButtonContainer>
                { spinner ? <Spinner/> : null }
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
