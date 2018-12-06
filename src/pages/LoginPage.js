import React, { useState, useContext } from 'react';
import history from '../history';
import { AuthContext } from  '../AuthContext';
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
            history.push('/');
        });
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
export default LoginPage;