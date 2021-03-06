import React, { useState, useEffect, useRef, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { getFights, addFight, takeFight } from '../../actions/FightAction';
import './Fights.css';

const Fights = () => {
	const { player, setPlayer } = useContext(PlayerContext);
	const [fights, setFight] = useState([]);
	const intervalRef = useRef();

	useEffect(
		() => {
			getFights().then(res => {
				setFight(res);
			});
			const id = setInterval(() => {
				getFights().then(res => {
					setFight(res);
				});
			}, 5000);
			intervalRef.current = id;
			return () => {
				clearInterval(intervalRef.current);
			};
		},
		[fights]
	);
	const handleClick = () => {
		addFight().then(res => console.log(res));
	};
	const handleTakeFight = fightId => {
		takeFight(fightId).then(res => {
			setPlayer({ ...player, in_battle: true });
		});
	};

	return (
		<div className="fights">
			{fights
				? fights.map((fight, index) => (
						<div key={index}>
							{fight.id} - {fight.user1.name} [{fight.user1.level}]{' '}
							{fight.user1.id === player.id ? null : (
								<button onClick={handleTakeFight.bind(null, fight.id)}>
									Fight
								</button>
							)}
						</div>
				  ))
				: null}
			<button onClick={handleClick}>Fight</button>
		</div>
	);
};

export default Fights;
