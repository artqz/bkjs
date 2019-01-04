import React, { useEffect, useRef, useState, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { currentFight, attack } from '../../actions/FightAction';
import Character from '../character/Character';

import './Pvp.css';

const Pvp = () => {
	const { player } = useContext(PlayerContext);
	const [settings, setSetting] = useState({ isWhite: false });
	const [battle, setBattle] = useState({});
	const intervalRef = useRef();
	const pathSkills = '/assets/skills/';

	useEffect(() => {
		currentFight().then(res => {
			setBattle(res);
		});
		const id = setInterval(() => {
			currentFight().then(res => {
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
			console.log(123);

			clearInterval(intervalRef.current);
		};
	}, []);
	const handleClickAttack = () => {
		attack().then(res => {
			setSetting({ isWhite: true });
		});
	};

	return (
		<div>
			{settings.isWhite ? (
				<React.Fragment>
					<Character player={player} />
					<div className="doll">Ждем ход противника</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					{battle.user1 ? (
						<div>
							{battle.user1.id === player.id ? (
								<div>
									<Character player={battle.user1} />
									<Character player={battle.user2} target={true} />
								</div>
							) : (
								<div>
									<Character player={battle.user2} />
									<Character player={battle.user1} target={true} />
								</div>
							)}
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
					) : null}
				</React.Fragment>
			)}
		</div>
	);
};

export default Pvp;
