import axios from 'axios';

export const login = (data) => dispatch => {
    return axios.post('http://127.0.0.1:8000/oauth/token', data);    
}