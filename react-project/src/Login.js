import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import uuid  from 'uuid'
import  { Redirect } from 'react-router-dom'
import App from './App';




class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            users: []

        };
    }

    componentWillMount(){
        this.setState({
            users:[
                {
                    id:uuid.v4(),
                    email: 'iosif.kakalelis@gmail.com',
                    password: '123456'
                },

                {
                    id:uuid.v4(),
                    email: 'alex@gmail.com',
                    password: '123456'
                },
                {
                    id:uuid.v4(),
                    email: 'josef@gmail.com',
                    password: '123456'

                }
            ]
        })

    }
    validateForm() {
        console.log(this.state.users);

        let found = false;

        return this.state.email.length > 0 && this.state.password.length > 0 ;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = () => {
       // event.preventDefault();
        this.props.event(true, this.state.email);
    };

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>

            </div>
        );
    }
}

export default Login;
