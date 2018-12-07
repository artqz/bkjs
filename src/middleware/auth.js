import decode from 'jwt-decode';
import axios from 'axios';

export const login = (username, password) => {
	const data = {
		grant_type: 'password',
		client_id: '2',
		client_secret: 'YuMGy00bQjOewsIS2A9XNnvkkReoLNTpHWipAn3a',
		username: username,
		password: password,
	};

	return axios
		.post(`${process.env.REACT_APP_API_URL}/oauth/token`, data)
		.then(res => {
			setToken(res.data.access_token);
			return res;
		});
};
export const loggedIn = () => {
	const token = getToken();
	return !!token && !isTokenExpired(token);
};
const isTokenExpired = token => {
	try {
		const decoded = decode(token);
		if (decoded.exp < Date.now() / 1000) {
			return true;
		} else return false;
	} catch (err) {
		return false;
	}
};
const setToken = token => {
	return localStorage.setItem('token', token);
};
const getToken = () => {
	return localStorage.getItem('token');
};
