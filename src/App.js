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
    const dbRef = firebase.database().ref();

  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({
          user,
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
        {this.state.isLoggedIn ? <HomePage /> : <LogInPage />}
      </div>
    )
  }
}

export default App
