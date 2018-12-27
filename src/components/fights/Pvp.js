import React, { useEffect, useRef, useState, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { currentFight, attack } from '../../actions/FightAction';
import Character from '../character/Character';
const Pvp = () => {
	const { player } = useContext(PlayerContext);
	const [settings, setSetting] = useState({ isWhite: false });
	const [battle, setBattle] = useState({});
	const intervalRef = useRef();
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
			console.log(res);
		});
	};
	return (
		<div>
			{settings.isWhite ? (
				<span>Ожидаеем ход противника</span>
			) : (
				<React.Fragment>
					{battle.user1 ? (
						<div>
							{battle.user1.id === player.id ? (
								<div>
									<Character player={battle.user1} />
									<Character player={battle.user2} />
								</div>
							) : (
								<div>
									<Character player={battle.user2} />
									<Character player={battle.user1} />
								</div>
							)}
						</div>
					) : null}
					<button onClick={handleClickAttack}>Uebat!</button>
				</React.Fragment>
			)}
		</div>
	);
};

export default Pvp;
