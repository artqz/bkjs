import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import './TopBar.css';

const TopBar = () => {
    const { player } = useContext(PlayerContext);
    const lineCurrentHp = player.hp_current/player.hp_max*100;
    return (
        <div className="topBar">
            <div className="player">
                {player.name}
                {player.level}                
                <div className="hp" data-progress={player.hp_current + '\/' + player.hp_max}><span className="current" style={{width: lineCurrentHp + '%'}}></span></div>
            </div>            
        </div>
    );
}

export default TopBar;