import React, { useState, useContext } from 'react';
import history from '../history';
import { AuthContext } from  '../context/AuthContext';
import { login } from '../actions/AuthActions';

const LoginPage = () => {
    const { setAuth } = useContext(AuthContext);
    
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
    
    const handleSubmit = () => {
        login(form.username, form.password).then(res => {
            setAuth({ isAuth: true });
            history.push('/game');
        });
    }

    return (
        <div>
            {form.username}
            <input name="username" value={form.username} onChange={updateField}/>
            {form.password}
            <input name="password" value={form.password} onChange={updateField}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}
export default LoginPage;