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
