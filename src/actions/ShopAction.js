import axios from 'axios';
import { getToken } from './AuthActions';

export const getShopInfo = locationId => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/shops/location/${locationId}`, config)
		.then(res => {
			return res.data;
		});
};