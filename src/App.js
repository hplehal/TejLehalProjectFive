import React, { Component } from 'react'
import LogInPage from './Components/LogInPage';
import HomePage from './Components/HomePage';
import firebase from './firebase';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      games: [],
      isLoggedIn: true
    }
  }
  componentDidMount() {
    this.authListener();
    const dbRef = firebase.database().ref('gamesPosted');
    dbRef.on('value', (result) => {

      const data = result.val();
      const newState = Object.values(data);
      this.setState({
        games: newState
      })
    })
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const dbUser = {
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
          uid: user.uid
        }
        firebase.database().ref('users/' + user.uid).set(dbUser);
        this.setState({
          user: dbUser,
          isLoggedIn: true
        });

      } else {
        this.setState({
          user: null,
          isLoggedIn: false
        });
      }
    })
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <HomePage user={this.state.user} games={this.state.games} /> : <LogInPage />}
      </div>
    )
  }
}

export default App
