import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import GamePost from './GamePost';
import CreatePickUpGameForm from './CreatePickUpGameForm';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            longitude: '',
            latitude: '',
            isButtonClicked: false
        }
    }

    getGeolocation = async () => {
        await navigator.geolocation.getCurrentPosition(currPosition => this.setState({
            longitude: currPosition.coords.longitude,
            latitude: currPosition.coords.latitude,
        }),
            (err) => console.log(err)
        );
        // this.props.games.filter(game => {(this.state.longitude + 5) > })
    }

    handleLogOut = () => {
        firebase.auth().signOut();
    }

    showPickUpGameForm = () => {
        this.setState({
            isButtonClicked: true,
        })
    }

    showPickUpGamePost = () => {
        this.setState({
            isButtonClicked: false,
        })
    }

    render() {
        const { user, games } = this.props;
        return (
            <main>
                <Header user={user} handleLogOut={this.handleLogOut} showPickUpGamePost={this.showPickUpGamePost} />
                {
                    this.state.isButtonClicked ? < CreatePickUpGameForm user={user} showPickUpGamePost={this.showPickUpGamePost} /> :
                        <>
                            <section className="dropInBanner">
                                <button tabIndex="3" type="submit" onClick={this.showPickUpGameForm}>Create Pick Up Game Post</button>
                                <h3>Let’s Get Playing! Find the game that suits your style. </h3>
                            </section>
                            <section>
                                <button tabIndex="4" type="submit" onClick={this.getGeolocation}> Find Post Near You</button>
                                {games.reverse().map((game, index) => {
                                    return (
                                        <GamePost key={index}
                                            game={game}
                                            index={index}
                                            longitude={this.state.longitude}
                                            latitude={this.state.latitude}
                                        />
                                    )
                                })}
                            </section>
                        </>
                }
            </main >
        );
    }
}

export default HomePage;