import React, { Component } from 'react';
import firebase from '../firebase';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleLogOut = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <button type="submit" onClick={this.handleLogOut}>Log Out</button>
            </div>
        );
    }
}

export default HomePage;