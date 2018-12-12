import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import history from '../history';
import { AuthContext } from '../context/AuthContext';
import { register } from '../actions/AuthActions';
import './RegisterPage.css';

const RegisterPage = () => {
	const { setAuth, auth } = useContext(AuthContext);
	const isAuth = auth.isAuth;

	const [form, setValues] = useState({
		username: '',
		email: '',
		password: '',
	});

	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		console.log(form);
		register(form.email, form.username, form.password).then(res => {
			history.push('/');
		});
	};

	if (isAuth) {
		return <Redirect to="/game" />;
	}

	return (
		<div className="registerBackground">
			<div className="registerForm">
				<input
					name="email"
					className="input"
					value={form.email}
					onChange={updateField}
				/>
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
					Register
				</div>
				<Link to="/">Login</Link>
			</div>
		</div>
	);
};

export default RegisterPage;
