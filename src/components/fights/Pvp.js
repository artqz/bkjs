import React, { useEffect, useRef } from 'react';
import { currentFight, attack } from '../../actions/FightAction';
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
    const handleClickAttack = () => {
        attack().then(res => {
            console.log(res);            
        })
    }
	return (
		<div>
			<button onClick={handleClickAttack}>Uebat!</button>
		</div>
	);
};

export default Pvp;
