import React, { useState, useContext, useRef, useEffect } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { pveCurrent, pveAttack } from '../../actions/FightAction';
import Character from '../character/Character';
import Npc from '../character/Npc';

const Pve = () => {
	const { player } = useContext(PlayerContext);
	const [settings, setSetting] = useState({ isWhite: false });
	const [battle, setBattle] = useState({});
	const intervalRef = useRef();
	const pathSkills = '/assets/skills/';

	useEffect(() => {
		pveCurrent().then(res => {
			setBattle(res);
		});
		const id = setInterval(() => {
			pveCurrent().then(res => {
				if (res) {
					setBattle(res);
					setSetting({ isWhite: false });
				} else {
					setSetting({ isWhite: true });
				}
			});
		}, 5000);
		intervalRef.current = id;
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	const handleClickAttack = () => {
		pveAttack().then(res => {
			setSetting({ isWhite: true });
		});
	};	

	return settings.isWhite ? (
		<div>
			<React.Fragment>
				<Character player={player} />
				<div className="doll">Ждем ход противника</div>
			</React.Fragment>
		</div>
	) : (
	<div>
		{battle.user1 ? (
			<div>
				<Character player={battle.user1} />
				<Npc npc={battle.npc} />
			</div>
		) : null}	
		<div className="hotKeyPanel">
			<span className="key" onClick={handleClickAttack}>
				<img src={pathSkills + 'might.png'} alt="Attack" />
			</span>
			<span className="key" />
			<span className="key" />
			<span className="key" />
			<span className="key" />
		</div>	
	</div>
	);
};

export default Pve;
