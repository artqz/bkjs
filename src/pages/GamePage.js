import React, { useContext } from 'react';

import { PlayerContext } from '../context/PlayerContext';

import Chat from '../components/chat/Chat';
import TopBar from '../components/bars/TopBar';
import MenuBar from '../components/bars/MenuBar';
import Character from '../components/character/Character';
import Map from '../components/map/Map';
import Fights from '../components/fights/Fights';
import Pvp from '../components/fights/Pvp';

import './GamePage.css';

const GamePage = () => {
	const { player } = useContext(PlayerContext);

	return (
		<div>
			<TopBar />
			{player.in_battle ? (
				<div className="battleground">
					<Pvp />
				</div>
			) : (
				<div className="playground">
					<Character player={player} />
					<Map />
					<Fights />
					<MenuBar />
				</div>
			)}
			<Chat />
		</div>
	);
};
export default GamePage;
