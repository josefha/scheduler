import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import uuid  from 'uuid'
// import  { Redirect } from 'react-router-dom'
// import App from './App';

class Login extends Component {
    constructor(props) {
        super(props);
            // Creates empty login state variables
        this.state = {
            email: "",
            password: "",
            users: []
        };
    }

    //function that defines user logins
    //Obs only for prototype purpose
    // Create demo users
    componentWillMount(){
        this.setState({users:[
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

    //checks if form is valid
    validateForm() {
        let users = this.state.users;
        console.log(users);

        return (this.state.email.length > 0 && this.state.password.length > 0)

    }

    //handler for form change
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    //handler for login request
    handleSubmit = () => {
        let users = this.state.users;
        let found = false;
        let email = this.state.email;
        let password = this.state.password;
       // event.preventDefault();

       //OBS Changed this from .map to forEach because we don't
       //need to save the result // Josef
        users.forEach(function (user) {
            if(user.email===email && user.password === password){
                found = true;
            }

        });
           if(found===false){
               alert("Wrong email or password")
           }
            this.props.event(found, this.state.email); // Uppdates App.js with the result
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
                        disabled={!this.validateForm()} //Validate form first to enable button
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
