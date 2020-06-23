import React, { Component } from 'react';
import firebase from '../firebase';

class LogInForm extends Component {
    constructor() {
        super();
        this.state = {
            error: ''
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

    handleLogIn = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.password)
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogIn}>
                    <label>Username</label>
                    <input type="email" name="email" value={this.props.email} onChange={this.props.handleChange} id="inputEmail" placeholder="Enter email" />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.props.handleChange} id="inputPassword" placeholder="Password" />
                    <button type="submit" onClick={this.handleLogIn} disabled={!this.props.password}>Log In</button>
                    <p>-OR-</p>
                    <button type="submit" onClick={this.handleGoogleSignIn}>Sign In with Google</button>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </form>
            </div>
        );
    }
}

export default LogInForm;