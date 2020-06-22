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
    componentDidMount() {
        this.getGeolocation();
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
            <div>
                <Header user={user} />
                <p>{this.state.longitude}</p>
                <p>{this.state.latitude}</p>
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