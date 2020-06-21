import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleLogOut = () => {
        firebase.auth().signOut();
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <Header user={user} />
                <h1>Main Page</h1>
                <button type="submit" onClick={this.handleLogOut}>Log Out</button>
            </div>
        );
    }
}

export default HomePage;