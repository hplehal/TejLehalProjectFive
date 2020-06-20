import React, { Component } from 'react';
import firebase from '../firebase';

class LogInPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }
    handleLogIn = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }

    handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }

    handleGoogleSignIn = async (event) => {
        event.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider)
        }
        catch (error) {
            this.setState({
                error: error.message
            })
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="logInForm">
                    <h1>Drop In</h1>
                    <form onSubmit={this.handleLogIn}>
                        <label>Username</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="inputEmail" placeholder="Enter email" />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="inputPassword" placeholder="Password" />
                        <button type="submit" onClick={this.handleLogIn} disabled={!this.state.password}>Log In</button>
                        <button type="submit" onClick={this.handleSignUp}>Sign Up</button>
                        <button type="submit" onClick={this.handleGoogleSignIn}>Sign In with Google</button>

                    </form>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </div>
            </div>
        );
    }
}

export default LogInPage;