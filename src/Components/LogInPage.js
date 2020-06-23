import React, { Component } from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

class LogInPage extends Component {
    constructor() {
        super();
        this.state = {
            isLogInOpen: true,
            email: '',
            password: '',
            // passwordTwo: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showLogIn = () => {
        this.setState({
            isLogInOpen: true,
        })
    }
    showSignUp = () => {
        this.setState({
            isLogInOpen: false,
        })
    }

    render() {
        return (
            <div>
                <div className="logInForm">
                    <h1>DropIn</h1>
                    <div className="formHeading">
                        <div className="changeForm">
                            <button type="submit" onClick={this.showLogIn}>Log In</button>
                            <button type="submit" onClick={this.showSignUp}>Sign Up</button>
                        </div>
                        {this.state.isLogInOpen ? <LogInForm handleChange={this.handleChange} email={this.state.email} password={this.state.password} /> : <SignUpForm handleChange={this.handleChange} email={this.state.email} password={this.state.password} />}

                    </div>
                </div>
            </div>
        );
    }
}

export default LogInPage;