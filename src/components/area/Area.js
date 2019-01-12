import React, { useContext, useEffect, useRef, useState } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { getSpawnNpc } from '../../actions/LocationActions';

import './Area.css';

const Area = () => {
    const { player } = useContext(PlayerContext);
    const [spawns, setSpawn] = useState([]);
    const intervalRef = useRef();

    useEffect(
		() => {
			getSpawnNpc (player.location_id).then(res => {
				setSpawn(res);            
			});
			const id = setInterval(() => {
				getSpawnNpc(player.location_id).then(res => {
                    setSpawn(res);                    
                });
			}, 30000);
			intervalRef.current = id;
			return () => {
				clearInterval(intervalRef.current);
			};
		},
		[]
    );
    
    return spawns ? (
        <div className="area">{spawns.map(spawn => (
            <div>{spawn.npc.name_ru} [{spawn.npc.hp}] <button>Бой</button></div>
        ))}</div>
    ) : null;
}

export default Area;