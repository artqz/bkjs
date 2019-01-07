import axios from 'axios';
import { getToken } from './AuthActions';

export const EuqipItems = locationId => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(
			`${process.env.REACT_APP_API_URL}/api/users/equip_item`,
			config
		)
		.then(res => {
			return res.data;
		});
};