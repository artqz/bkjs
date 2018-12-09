import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

import Chat from '../components/chat/Chat';
import TopBar from '../components/bars/TopBar';

const GamePage = () => {
	const { player } = useContext(PlayerContext);

	return (
		<div>
			<TopBar />
			<button>{player.name}</button>
			<Chat />
		</div>
	);
};
export default GamePage;
