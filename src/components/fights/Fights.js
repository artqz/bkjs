import React from 'react';
import { sendMessage } from '../../actions/ChatActions';

const Fights = () => {
    const handleClick = () => {
        sendMessage('<--- Этот уебок подал заявку на бой!');
        
    }
    return (
        <div>
            <button onClick={handleClick}>Fight</button>
        </div>
    );
}

export default Fights;