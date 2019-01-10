import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { getPlayerInfo, getGold } from '../../actions/PlayerActions';

import './Bank.css';

const Bank = () => {
	const { player, setPlayer } = useContext(PlayerContext);
	const goldItem = player.items.filter(item => item.itemable_type === 'etc' && item.itemable_id === 1)[0];
	
	const giveMeMany = () => {
		getGold().then(res => {
			getPlayerInfo().then(res => {
				setPlayer({ ...player, items: res.items });
			});
		});
	};

	return (
		<div className="bank">
			<div>Bank</div>
			<div>
				У Вас <b>{goldItem ? goldItem.count : 0}</b> Gold
			</div>
			<button onClick={giveMeMany}>Взять соточку</button>
		</div>
	);
};

export default Bank;
