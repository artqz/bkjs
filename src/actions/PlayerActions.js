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
		.get(`${process.env.REACT_APP_API_URL}/api/user`, config)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return removeItem();
		});
};
const getToken = () => {
	return localStorage.getItem('token');
};
const removeItem = () => {
	return localStorage.removeItem('token');
};
