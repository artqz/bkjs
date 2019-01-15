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
		.get(`${process.env.REACT_APP_API_URL}/api/battles`, config)
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
		.post(`${process.env.REACT_APP_API_URL}/api/battles`, data, config)
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
		.put(
			`${process.env.REACT_APP_API_URL}/api/battles/${fightId}`,
			data,
			config
		)
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
		.get(`${process.env.REACT_APP_API_URL}/api/battles/current`, config)
		.then(res => {
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
		.post(`${process.env.REACT_APP_API_URL}/api/battles/attack`, data, config)
		.then(res => {
			return res.data;
		});
};

//pve actions
export const pveCreate = (npcId) => {
	const data = {npc_id: npcId};
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.post(`${process.env.REACT_APP_API_URL}/api/pve`, data, config)
		.then(res => {
			return res.data;
		});
};
