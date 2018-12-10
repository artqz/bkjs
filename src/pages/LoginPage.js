import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import history from '../history';
import { AuthContext } from '../context/AuthContext';
import { PlayerContext } from '../context/PlayerContext';
import { login } from '../actions/AuthActions';
import { getPlayerInfo } from '../actions/PlayerActions';
import './LoginPage.css';

const LoginPage = () => {
	const { setAuth, auth } = useContext(AuthContext);
	const isAuth = auth.isAuth;
	const { setPlayer } = useContext(PlayerContext);

	const [form, setValues] = useState({
		username: '',
		password: '',
	});

	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		login(form.username, form.password).then(res => {
			getPlayerInfo().then(res => {
				setAuth({ isAuth: true });
				setPlayer(res);
				history.push('/game');
			});
		});
	};

	if (isAuth) {
		return <Redirect to="/game" />;
	}

	return (
		<div className="loginBackground">
			<div className="loginForm">
				<input
					name="username"
					className="input"
					value={form.username}
					onChange={updateField}
				/>
				<input
					name="password"
					type="password"
					className="input"
					value={form.password}
					onChange={updateField}
				/>
				<div className="button" onClick={handleSubmit}>
					Login
				</div>
				<Link to="/register">Register</Link>
			</div>
		</div>
	);
};
export default LoginPage;
