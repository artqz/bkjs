import React, { useState, useEffect, useRef, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { sendMessage } from '../../actions/ChatActions';
import { getFights, addFight, takeFight } from '../../actions/FightAction';
import './Fights.css';

const Fights = () => {
	const { player, setPlayer } = useContext(PlayerContext);
	const [fights, setFight] = useState([]);
	const intervalRef = useRef();

	useEffect(() => {
		const id = setInterval(() => {
			getFights().then(res => {
				setFight(res);
			});
		}, 5000);
		intervalRef.current = id;
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [fights]);
	const handleClick = () => {
		addFight().then(res => console.log(res));
		sendMessage('<--- Этот уебок подал заявку на бой!');
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
							<button onClick={handleTakeFight.bind(null, fight.id)}>
								Fight
							</button>
						</div>
				  ))
				: null}
			<button onClick={handleClick}>Fight</button>
		</div>
	);
};

export default Fights;
