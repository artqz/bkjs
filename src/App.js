import React, { useEffect, useState, useContext } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

import history from './history';
import { AuthContext } from './context/AuthContext';
import { PlayerContext } from './context/PlayerContext';
import { checkAuth } from './actions/AuthActions';
import { getPlayerInfo } from './actions/PlayerActions';
//import NavBar from './components/layouts/NavBar';
import './App.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GamePage from './pages/GamePage';

const App = () => {
	const [auth, setAuth] = useState({ isAuth: false });
	const [player, setPlayer] = useState({});

	useEffect(() => {
		setAuth({ isAuth: checkAuth() });
		if (checkAuth()) {
			getPlayerInfo()
				.then(res => setPlayer(res))
				.catch(err => console.log(err));
		}
	}, []);

	return (
		<Router history={history}>
			<AuthContext.Provider value={{ auth, setAuth }}>
				<PlayerContext.Provider value={{ player, setPlayer }}>
					{/* <NavBar /> */}
					<Route exact path="/" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<PrivateRoute path="/game" component={GamePage} />
				</PlayerContext.Provider>
			</AuthContext.Provider>
		</Router>
	);
};

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { auth } = useContext(AuthContext);
	const isAuth = auth.isAuth;

	return (
		<Route
			{...rest}
			render={props =>
				isAuth ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	);
};

export default App;
