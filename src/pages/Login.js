import React, { useState, useReducer } from 'react';
import history from '../history';
import { login } from '../middleware/auth';

const Login = (props) => {
    const [form, setValues] = useState({
        username: '',
        password: ''
    });
    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (props) => {
        login(form.username, form.password).then(res => history.push('/'));
        // const data = {
        //     grant_type: 'password',
        //     client_id:'2',
        //     client_secret: 'YuMGy00bQjOewsIS2A9XNnvkkReoLNTpHWipAn3a',
        //     username: form.username,
        //     password: form.password
        // }
        // axios.post('http://127.0.0.1:8000/oauth/token', data)
        // .then((res) => {
        //     console.log(res)
        //     localStorage.setItem('token', res.data.access_token);}//this.context.router.push('/')
        // )
        // .catch(err => console.log(err));
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