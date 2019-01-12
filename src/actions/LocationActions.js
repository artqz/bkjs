import axios from 'axios';
import { getToken } from './AuthActions';

export const getLocations = locationId => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/locations/${locationId}`, config)
		.then(res => {
			return res.data;
		});
};

export const changeLocation = (playerId, locationId) => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.put(
			`${process.env.REACT_APP_API_URL}/api/users/${playerId}?update=location`,
			{
				location_id: locationId,
			},
			config
		)
		.then(res => {
			return res.data;
		});
};

export const getSpawnNpc = locationId => {
	const token = getToken();
	const config = {
		headers: {
			Authorization: 'Bearer ' + token,
			Accept: 'application/json',
		},
	};
	return axios
		.get(`${process.env.REACT_APP_API_URL}/api/locations/spawn/${locationId}`, config)
		.then(res => {
			return res.data;
		});
};
