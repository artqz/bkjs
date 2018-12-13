import React, { useEffect, useRef } from 'react';
import { currentFight } from '../../actions/FightAction';
const Pvp = () => {
    const intervalRef = useRef();
	useEffect(() => {
		const id = setInterval(() => {
			currentFight().then(res => {
				console.log(res);                
			});
		}, 5000);
		intervalRef.current = id;
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);
	return (
		<div>
			<button>Uebat!</button>
		</div>
	);
};

export default Pvp;
