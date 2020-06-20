import React, { Component } from 'react'
import LogInPage from './Components/LogInPage';
import MainPage from './Components/MainPage'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <LogInPage /> : <MainPage />}
      </div>
    )
  }
}

export default App
