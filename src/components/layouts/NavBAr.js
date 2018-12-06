import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from  '../../AuthContext';

const NavBar = () => {
    const { auth } = useContext(AuthContext);
    console.log(auth);
    
    return (
        <nav>
            <ul>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;