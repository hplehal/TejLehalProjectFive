import React, { Component } from 'react';
import firebase from '../firebase';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            error: '',

        }
    }
    handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.props.email, this.props.password);
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignUp}>
                    <label>Username</label>
                    <input type="email" name="email" value={this.props.email} onChange={this.props.handleChange} id="inputEmail" placeholder="Enter email" />
                    <label>Password</label>
                    <input type="password" name="password" value={this.props.password} onChange={this.props.handleChange} id="inputPassword" placeholder="Password" />
                    {/* <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={this.props.passwordTwo} id="inputConfirmPassword" placeholder="Confirm Password"></input> */}
                    <button type="submit" onClick={this.handleSignUp}>Sign Up</button>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </form>
            </div>
        );
    }
}

export default SignUpForm;