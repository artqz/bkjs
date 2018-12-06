import React, { useState, useContext } from 'react';
import history from '../history';
import { login } from '../middleware/auth';
import { AuthContext } from  '../AuthContext';
const Login = (props) => {
    const value = useContext(AuthContext);
    console.log(value);
    
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