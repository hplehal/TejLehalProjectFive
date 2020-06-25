import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import pointer from '../assets/images/marker.png'
// import { Icon } from 'leaflet';

const GamePost = ({ game, index }) => {
    const mapGl = {
        width: 400,
        height: 200,
        latitude: 43.6532,
        longitude: 79.3832,
        zoom: 13
    }
    if (game.locationLatLng !== undefined) {
        mapGl.latitude = game.locationLatLng.lat;
        mapGl.longitude = game.locationLatLng.lng;
    }
    return (
        <div tabIndex="5" className="postContainer">
            <div tabIndex="6" className="mapContainer">
                <ReactMapGL {...mapGl} maxZoom={12} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} tabIndex="-1">
                    <Marker key={index} latitude={mapGl.latitude} longitude={mapGl.longitude}>
                        <img className="marker" src={pointer} alt="pointer to the map" />
                    </Marker>
                </ReactMapGL>
            </div>
            <div className="dateTimeSport">
                <p>{game.date}</p>
                <p>{game.time}</p>
                <p>{game.typeOfSport}</p>
                <p>{game.levelOfCompetition}</p>
            </div>
            <div className="detailsContainer">
                <h2>{game.title}</h2>
                <p className="gameLocation">{game.location}</p>

                <p>{game.description}</p>
                <button tabIndex="7" type="submit" > <a target="_blank" rel="noopener noreferrer" href={`http://maps.google.com?q=${mapGl.latitude},${mapGl.longitude}`}>Get Direction</a></button>
            </div>

        </div>
    )
}

export default GamePost
