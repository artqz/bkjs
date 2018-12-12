import React, { useState, useContext } from 'react';
import { getLocations, changeLocation } from '../../actions/LocationActions';
import { PlayerContext } from '../../context/PlayerContext';
import './Map.css';

const Map = () => {
	const { player } = useContext(PlayerContext);
	const [settings, setSetting] = useState({
		background: null,
		exitButton: [],
		images: [],
		width: 500,
		height: 268,
		isLoading: true,
	});
	const [location, setLocation] = useState({});

	if (player.location_id) {
		getLocations(player.location_id).then(res => {
			setLocation(res);
			setSetting({ ...settings, isLoading: false });
        });
	}

    const rooms = location.rooms;

    const test = (id) => {
        console.log(id);
        
    }

	return (
		<div
			className="map"
			style={{ width: settings.width, height: settings.height }}
		>
			{settings.isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="location">
					{location.name}
					{rooms
						? rooms.map((room, index) => <Room key={index} room={room} test={test} />)
						: null}
				</div>
			)}
		</div>
	);
};

const Room = props => {
    const { room } = props;
    const pathCities = '/assets/cities';
 
	return (
		<div className="room" style={{left:room.x,top:room.y}}>
			<img src={pathCities + room.model} alt={room.name} onClick={props.test.bind(null, room.id)} />
		</div>
	);
};

export default Map;
