import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import GamePost from './GamePost';
import CreatePickUpGame from './CreatePickUpGame';

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
        const { user, games } = this.props;
        return (
            <div>
                <Header user={user} />
                <button type="submit" onClick={this.handleLogOut}>Log Out</button>
                <section>
                    {games.map((game) => {
                        return (
                            <GamePost game={game} />
                        )
                    })}
                </section>
                < CreatePickUpGame user={user} />
            </div>
        );
    }
}

export default HomePage;