import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../actions/AuthActions';
import { PlayerContext } from '../../context/PlayerContext';
import { getPlayerInfo } from '../../actions/PlayerActions';
import './TopBar.css';

const TopBar = () => {
	const { setAuth } = useContext(AuthContext);
	const { player, setPlayer } = useContext(PlayerContext);
	const intervalRef = useRef();
	const lineCurrentHp = (player.hp_current / player.hp_max) * 100;
	let lineHpColor;
	if (lineCurrentHp <= 19) {
		lineHpColor = 'red';
	} else if (lineCurrentHp <= 45) {
		lineHpColor = 'yellow';
	} else lineHpColor = 'green';

	useEffect(() => {
		const id = setInterval(() => {
			getPlayerInfo().then(res => {
				setPlayer({
					...player,
					hp_current: res.hp_current,
					in_battle: res.in_battle,
				});
			});
		}, 3000);
		intervalRef.current = id;
		return () => {
			clearInterval(intervalRef.current);
		};
	});

	const handleLogout = () => {
		logout();
		setAuth({ auth: false });
	};
	return (
		<div className="topBar">
			<div className="player">
				{player.name} [{player.level}]
				<div
					className="hp"
					data-progress={player.hp_current + '/' + player.hp_max}
				>
					<span
						className="current"
						style={{
							width: lineCurrentHp + '%',
							backgroundColor: lineHpColor,
						}}
					/>
				</div>
			</div>
			<div>Wins: {player.count_wins}</div>
			<div>Loses: {player.count_loses}</div>
			<div>
				<a href="/" onClick={handleLogout}>
					Logout
				</a>
			</div>
		</div>
	);
};

export default TopBar;
