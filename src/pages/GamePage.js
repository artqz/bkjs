import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

import Chat from '../components/chat/Chat';

const GamePage = () => {
	const { player } = useContext(PlayerContext);

	return (
		<div>
			<button>{player.name}</button>
			<Chat />
		</div>
	);
};
export default GamePage;
