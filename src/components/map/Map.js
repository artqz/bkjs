import React, { useState, useContext, useEffect } from 'react';
import { getLocations, changeLocation } from '../../actions/LocationActions';
import { PlayerContext } from '../../context/PlayerContext';
import './Map.css';

const Map = () => {
	const { player, setPlayer } = useContext(PlayerContext);
	const [settings, setSetting] = useState({
		background: null,
		width: 500,
		height: 268,
		isLoading: true,
	});
	const [location, setLocation] = useState({});
	const pathCities = '/assets/cities';

	useEffect(
		() => {
			if (player.location_id) {
				getLocations(player.location_id).then(res => {
					setLocation(res);
					setSetting({ ...settings, isLoading: false, exitButton: {} });
				});
			}
		},
		[player.location_id]
	);

	const rooms = location.rooms;

	const handleClick = locationId => {
		changeLocation(player.id, locationId).then(res => {
			setPlayer({
				...player,
				location_id: res.location_id,
				location: res.location,
			});
		});
	};

	return (
		<div
			className="map"
			style={{
				width: settings.width,
				height: settings.height,
				backgroundImage: 'url(' + pathCities + location.background + ')',
			}}
		>
			{location.location_id ? (
				<div onClick={handleClick.bind(null, 1)}>Back</div>
			) : null}
			{settings.isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="location">
					{location.name}
					{rooms
						? rooms.map((room, index) => (
								<Room key={index} room={room} changeLocation={handleClick} />
						  ))
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
		<div className="room" style={{ left: room.x, top: room.y }}>
			<img
				src={pathCities + room.model}
				alt={room.name}
				onClick={props.changeLocation.bind(null, room.id)}
			/>
		</div>
	);
};

export default Map;
