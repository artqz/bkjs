import axios from 'axios';

export const getPlayerInfo = () => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};

	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/users/self`, config)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return removeItem();
		});
};

export const equipItem = itemId => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(
			`${process.env.REACT_APP_API_URL}/api/users/equip_item/${itemId}`,
			config
		)
		.then(res => {
			return res.data;
		});
};

export const playerRemoveItem = itemId => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(
			`${process.env.REACT_APP_API_URL}/api/users/remove_item/${itemId}`,
			config
		)
		.then(res => {
			return res.data;
		});
};

export const getGold = () => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/users/get_gold`, config)
		.then(res => {
			return res;
		});
};

const getToken = () => {
	return localStorage.getItem('token');
};
const removeItem = () => {
	return localStorage.removeItem('token');
};
