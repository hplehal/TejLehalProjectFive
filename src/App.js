import React, { Component } from 'react'
import LogInPage from './Components/LogInPage';
import HomePage from './Components/HomePage';
import firebase from './firebase';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoggedIn: true
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    const dbRef =
      firebase.auth().onAuthStateChanged(user => {
        console.log(user);
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
        {this.state.isLoggedIn ? <HomePage user={this.state.user} /> : <LogInPage />}
      </div>
    )
  }
}

export default App
