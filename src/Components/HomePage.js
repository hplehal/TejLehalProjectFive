import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import GamePost from './GamePost';
import CreatePickUpGame from './CreatePickUpGame';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            longitude: '',
            latitude: ''
        }
    }

    getGeolocation = async () => {
        await navigator.geolocation.getCurrentPosition(currPosition => this.setState({
            longitude: currPosition.coords.longitude,
            latitude: currPosition.coords.latitude
        }),
            (err) => console.log(err)
        );
    }

    handleLogOut = () => {
        firebase.auth().signOut();
    }

    render() {
        const { user, games } = this.props;
        return (
            <main>
                <Header user={user} />
                <div className="dropInBanner">
                    <button type="submit">Create Pick Up Game Post</button>
                </div>
                <p>{this.state.longitude}</p>
                <p>{this.state.latitude}</p>
                <button type="submit" onClick={this.handleLogOut}>Log Out</button>
                <button type="submit" onClick={this.getGeolocation}> Find Post Near You</button>

                <section>
                    {games.map((game, index) => {
                        return (
                            <GamePost key={index} game={game} />
                        )
                    })}
                </section>
                < CreatePickUpGame user={user} />
            </main>
        );
    }
}

export default HomePage;