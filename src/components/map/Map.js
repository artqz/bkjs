import React, { useState, useEffect, useContext } from 'react';
import { getLocations } from '../../actions/LocationActions';
import { PlayerContext } from '../../context/PlayerContext';
import './Map.css';

const Map = () => {
    const { player } = useContext(PlayerContext);
    const [mapSetting, setMapSetting] = useState({
        background: null,
		exitButton: [],
		images: [],
		width: 500,
		height: 268,
    });
    const [location, setLocation] = useState({});

    useEffect(() => {
        if(player.location_id) {
            getLocations(player.location_id).then(res => {
                setLocation(res)
            });
        }
    }, [player.location_id]);     
    const rooms = location.rooms;
    const handleClick = () => {
        console.log(123);
        
    }
    return (
        <div className="map">
            {location.name}
            {(rooms)? rooms.map((room, index) => <Room key={index} room={room} changeLocation={handleClick} />):null}
        </div>
    );
}

const Room = (props) => {
    const { room } = props;
    const pathCities = '/assets/cities'; 
    return (
        <React.Fragment>
            <img onClick={props.changeLocation(room.id)} src={pathCities + room.model} alt={room.name} />
        </React.Fragment>
    );
}

export default Map;