import React, { useContext } from 'react';

import { PlayerContext } from '../context/PlayerContext';

import Chat from '../components/chat/Chat';
import TopBar from '../components/bars/TopBar';
import Character from '../components/character/Character';
import Map from '../components/map/Map';

const GamePage = () => {
	const { player } = useContext(PlayerContext);

	return (
		<div>
			<TopBar player={player} />
			<Character player={player} />
			<Map locationId={player.location_id} />
			<Chat />
		</div>
	);
};
export default GamePage;
