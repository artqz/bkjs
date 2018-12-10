import axios from 'axios';

export const register = (email, username, password) => {
	const data = {
		email: email,
		username: username,
		password: password,
	};

	return axios
		.post(`${process.env.REACT_APP_API_URL}/api/users`, data)
		.then(res => {
			return res;
		});
};

export const login = (username, password) => {
	const data = {
		grant_type: process.env.REACT_APP_API_GRANT_TYPE,
		client_id: process.env.REACT_APP_API_CLIENT_ID,
		client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
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
const setToken = token => {
	return localStorage.setItem('token', token);
};

export const checkAuth = () => {
	if (getToken()) {
		return true;
	}
	return false;
};
const getToken = () => {
	return localStorage.getItem('token');
};

export const logout = () => {
	return localStorage.removeItem('token');
};
