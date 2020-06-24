import React, { Component } from 'react'
import LogInPage from './Components/LogInPage';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
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
        <Footer />
      </div>
    )
  }
}

export default App


// MapGl
// npm install mapbox-gl --save

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoidGVqbGVoYWwiLCJhIjoiY2prMWk0Z2ZpMGh1eDN3cWx3OGExZHY2eiJ9.VXfWtygf4iAUgEh8HPSrlw';
// var map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });
// /