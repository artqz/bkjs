import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

export const NavBar = () => {     
    const {auth} = useContext(AuthContext);
    // //const {setAuth, auth} = value;
    // console.log(auth);
    // const updateAuth = () => {
    //     setAuth({
    //         isAuth: true
    //     });
    // };
    console.log(auth);
    
    const isAuth = auth.isAuth; 
    
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