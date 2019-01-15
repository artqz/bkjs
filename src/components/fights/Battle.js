import React, { useState, useEffect } from 'react';
import { currentBattle } from '../../actions/PlayerActions';
import Pvp from './Pvp';
import Pve from './Pve';

const Battle = () => {
	const [type, setType] = useState();

	useEffect(() => {
		currentBattle().then(res => {
			if (res.type === 0) {
				setType('pvp');
			} else if (res.type === 1) setType('pve');
		});
	});

	return type === 'pvp' ? <Pvp /> : type === 'pve' ? <Pve /> : null;
};

export default Battle;
