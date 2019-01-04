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

export const equipItem = item => {
	const token = getToken();
	const data = { item: item };
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.post(`${process.env.REACT_APP_API_URL}/api/users/equip_item`, data, config)
		.then(res => {
			return res.data;
		});
};

const getToken = () => {
	return localStorage.getItem('token');
};
const removeItem = () => {
	return localStorage.removeItem('token');
};
