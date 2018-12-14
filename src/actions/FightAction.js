import axios from 'axios';
import { getToken } from './AuthActions';

export const getFights = () => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/fights`, config)
		.then(res => {
			return res.data;
		});
};

export const addFight = () => {
	const data = {};
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.post(`${process.env.REACT_APP_API_URL}/api/fights`, data, config)
		.then(res => {
			return res.data;
		});
};

export const takeFight = fightId => {
	const data = {};
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.put(`${process.env.REACT_APP_API_URL}/api/fights/${fightId}`, data, config)
		.then(res => {
			return res.data;
		});
};

export const currentFight = () => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/fights/current`, config)
		.then(res => {
            console.log(res);
            
			return res.data;
		});
};

export const attack = () => {
	const data = {};
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.post(`${process.env.REACT_APP_API_URL}/api/fights/attack`, data, config)
		.then(res => {
			return res.data;
		});
};