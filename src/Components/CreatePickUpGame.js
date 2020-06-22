import React, { Component } from 'react';
import firebase from '../firebase';
class CreatePickUpGame extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            location: '',
            levelOfCompetition: '',
            description: '',
            typeOfSport: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const dbGameRef = firebase.database().ref('gamesPosted');
        const postDetail = {
            ...this.state
        }
        postDetail['userId'] = this.props.user.uid;
        postDetail['createdAt'] = `${new Date()}`;
        dbGameRef.push(postDetail)
        this.setState({
            title: '',
            location: '',
            levelOfCompetition: '',
            description: '',
            typeOfSport: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Create a Pick Up Game!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" onChange={this.handleChange} name="title" id="pickUpGameTitle" value={this.state.title} />
                    <label>Location</label>
                    <input type="text" onChange={this.handleChange} name="location" id="pickUpGameLocation" value={this.state.location} />
                    <label>Brief Description</label>
                    <textarea name="description" onChange={this.handleChange} id="pickUpGameDescription" value={this.state.description} cols="30" rows="10"></textarea>
                    <label>Level Of Competition</label>
                    <input type="text" onChange={this.handleChange} name="levelOfCompetition" id="pickUpGameLevelOfDifficulty" value={this.state.levelOfCompetition} />
                    <label>Sport</label>
                    <input type="text" onChange={this.handleChange} name="typeOfSport" id="pickUpGameSport" value={this.state.typeOfSport} />
                    <button onClick={this.handleSubmit} type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default CreatePickUpGame;