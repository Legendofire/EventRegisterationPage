import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Input from '../components/Input';
import Button from '../components/Button';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            startup: "",
            reason: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'phone':
                this.setState({ phone: event.target.value });
                break;
            case 'startup':
                this.setState({ startup: event.target.value });
                break;
            case 'reason':
                this.setState({ reason: event.target.value });
                break;
            default:
                console.log(`you forgot to add ${event.target.name} to the switch case`);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/', {
            formData: this.state
        }).then((res) => {
            console.log(res);
        }).catch((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <Container>
                <Form>
                    <Input type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Please enter your email."
                        onChange={this.handleChange}
                        label="Email*"
                        valid/>
                    <Input type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Please enter your name."
                        onChange={this.handleChange}
                        label="Name*"
                        invalid/>
                    <Input type="text"
                        name="phone"
                        value={this.state.phone}
                        placeholder="Please enter your phone."
                        onChange={this.handleChange}
                        label="Phone*" />
                    <Input type="text"
                        name="startup"
                        value={this.state.startup}
                        placeholder="Please enter your startup name."
                        onChange={this.handleChange}
                        label="Startup name" />
                    <Input type="text"
                        name="reason"
                        value={this.state.reason}
                        placeholder="Please enter a brief answer."
                        onChange={this.handleChange}
                        label="Why do you want to attend?*" />
                    <ButtonContainer>
                        <Button text="Sign Up" onClick={this.handleSubmit} />
                    </ButtonContainer>
                </Form>
            </Container>
        );
    }
}


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
