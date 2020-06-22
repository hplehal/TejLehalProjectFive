import React from 'react'

const GamePost = ({ game }) => {
    return (
        <div className="postContainer">
            <h2>{game.title}</h2>
            <p>{game.createdAt}</p>
            <p>{game.typeOfSport}</p>
            <p>{game.location}</p>
            <p>{game.levelOfCompetition}</p>
            <p>{game.description}</p>
        </div>
    )
}

export default GamePost
