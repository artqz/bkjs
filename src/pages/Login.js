import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { reducer } from '../context/Auth';

const Login = (props) => {
    const [form, setValues] = useState({
        username: '',
        password: ''
    });
    const [state, dispatch] = useReducer(reducer, {count: 1});
    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        dispatch({type: 'AUTH_SUCCESS'});
        const data = {
            grant_type: 'password',
            client_id:'2',
            client_secret: 'YuMGy00bQjOewsIS2A9XNnvkkReoLNTpHWipAn3a',
            username: form.username,
            password: form.password
        }
        axios.post('http://127.0.0.1:8000/oauth/token', data)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access_token);}//this.context.router.push('/')
        )
        .catch(err => console.log(err));
    }

    return (
        <div>
            {form.username}
            <input name="username" value={form.username} onChange={updateField}/>
            {form.password}
            <input name="password" value={form.password} onChange={updateField}/>
            <button onClick={handleSubmit}>test</button>
        </div>
    )
}
export default Login;