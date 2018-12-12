import React, { useContext } from 'react';

import { PlayerContext } from '../context/PlayerContext';

import Chat from '../components/chat/Chat';
import TopBar from '../components/bars/TopBar';
import Character from '../components/character/Character';
import Map from '../components/map/Map';

const GamePage = () => {
	return (
		<div>
			<TopBar />
			<Character />
			<Map />
			<Chat />
		</div>
	);
};
export default GamePage;
