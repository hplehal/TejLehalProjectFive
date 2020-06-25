import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import pointer from '../assets/images/marker.png'
// import { Icon } from 'leaflet';

const GamePost = ({ game, index }) => {
    const mapGl = {
        width: 200,
        height: 200,
        latitude: 43.6532,
        // game.locationLatLng.lat,
        longitude: 79.3832,
        //  game.locationLatLng.lng,
        zoom: 13
    }
    if (game.locationLatLng !== undefined) {
        mapGl.latitude = game.locationLatLng.lat;
        mapGl.longitude = game.locationLatLng.lng;
    }
    return (
        <div className="postContainer">
            <div className="mapContainer">
                <ReactMapGL {...mapGl} maxZoom={12} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
                    <Marker key={index} latitude={mapGl.latitude} longitude={mapGl.longitude}>
                        <img className="marker" src={pointer} alt="pointer to the map" />
                    </Marker>
                </ReactMapGL>
            </div>
            <div className="dateTimeSport">
                <p>{game.typeOfSport}</p>
            </div>
            <div className="detailsContainer">
                <h2>{game.title}</h2>
                <p>{game.location}</p>
                <p>{game.levelOfCompetition}</p>
                <p>{game.description}</p>
                <button type="submit">Get Direction</button>
            </div>

        </div>
    )
}

export default GamePost
