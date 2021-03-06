import React, { useContext } from 'react';

import { PlayerContext } from '../context/PlayerContext';

import Chat from '../components/chat/Chat';
import TopBar from '../components/bars/TopBar';
import MenuBar from '../components/bars/MenuBar';
import Character from '../components/character/Character';
import Map from '../components/map/Map';
import Fights from '../components/fights/Fights';
import Shop from '../components/shop/Shop';
import Inventory from '../components/character/Inventory';
import Bank from '../components/bank/Bank';
import Area from '../components/area/Area';
import Battle from '../components/fights/Battle';

import './GamePage.css';

const GamePage = () => {
	const { player } = useContext(PlayerContext);
	let locationType;
	if (player.location) {
		locationType = player.location.type;
	}

	return (
		<div>
			<TopBar />
			{player.in_battle ? (
				<div className="battleground">
					<Battle />
				</div>
			) : (
				<div className="playground">
					<Character player={player} />
					<Map />
					{locationType === 'arena' ? <Fights /> : null}
					{locationType === 'bank' ? <Bank /> : null}
					{locationType === 'area' ? <Area /> : null}
					{locationType === 'shop' ? (
						<React.Fragment>
							<Shop />
							<Inventory />
						</React.Fragment>
					) : null}
					<MenuBar />
				</div>
			)}
			<Chat />
		</div>
	);
};
export default GamePage;
