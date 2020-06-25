import React from 'react'
import ReactMapGL from 'react-map-gl';
// import { Icon } from 'leaflet';

const GamePost = ({ game }) => {
    const mapGl = {
        width: 200,
        height: 200,
        latitude: game.locationLatLng.lat,
        longitude: game.locationLatLng.lng,
        zoom: 13
    }
    return (
        <div className="postContainer">
            <div className="mapContainer">
                <ReactMapGL {...mapGl} maxZoom={12} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
            </div>
            <div className="dateTimeSport">
                <p>{game.typeOfSport}</p>
            </div>
            <div className="detailsContainer">
                <h2>{game.title}</h2>
                <p>{game.createdAt}</p>

                <p>{game.location}</p>
                <p>{game.levelOfCompetition}</p>
                <p>{game.description}</p>
            </div>

        </div>
    )
}

export default GamePost
