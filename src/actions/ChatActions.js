import axios from 'axios';

export const getUsers = () => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/chat/users_online`, config)
		.then(res => {
			return res.data;
		});
};

export const getMessages = () => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/chat`, config)
		.then(res => {
			return res.data;
		});
};

export const sendMessage = message => {
	const data = {
		message: message,
	};
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.post(`${process.env.REACT_APP_API_URL}/api/chat`, data, config)
		.then(res => {
			console.log(res);

			return res.data;
		});
};
const getToken = () => {
	return localStorage.getItem('token');
};
