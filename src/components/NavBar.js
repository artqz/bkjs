import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth'

export const NavBar = () => {     
    const value = useContext(AuthContext);
    console.log(value.isAuth);
    
    const isAuth = value.isAuth; 

    const userLinks = (
        <Link to="/game" >Game</Link>
    );

    const guestLinks = (
        <Link to="/login">Login</Link>
    );

    return (
        <nav> 
            {(isAuth ) ? userLinks : guestLinks}               
        </nav>            
    );
}

export default NavBar;