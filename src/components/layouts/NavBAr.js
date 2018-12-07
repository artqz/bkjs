import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../actions/AuthActions';

const NavBar = () => {
	const { auth } = useContext(AuthContext);
	const isAuth = auth.isAuth;
	const handleClick = () => {		
		logout();
		return <Redirect to="/" />
	}
	const userLinks = (
		<ul>
			<li>
				<Link to="/profile">Profile</Link>
			</li>
			<li>
				<a href="/" onClick={handleClick}>Logout</a>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
		</ul>
	);
	return (
		<nav>
			<ul>
				<li>
					<Link to="/game">Game</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			{isAuth ? userLinks : guestLinks}
		</nav>
	);
};

export default NavBar;
