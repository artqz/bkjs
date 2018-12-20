import React, { useEffect, useRef, useState } from 'react';
import { currentFight, attack } from '../../actions/FightAction';
const Pvp = () => {
    const [settings, setSetting] = useState({isWhite: false});
    const intervalRef = useRef();

	useEffect(() => {
		const id = setInterval(() => {
			currentFight().then(res => {
                if(res.attack) setSetting({isWhite: false});
                else setSetting({isWhite: true});           
			});
		}, 5000);
		intervalRef.current = id;
		return () => {
			clearInterval(intervalRef.current);
		};
    }, []);
    const handleClickAttack = () => {
        attack().then(res => {
            setSetting({isWhite: true});
            console.log(res);            
        })
    }
	return (
		<div>
            {settings.isWhite ? <span>Ожидаеем ход противника</span> : <button onClick={handleClickAttack}>Uebat!</button>}
			
		</div>
	);
};

export default Pvp;
