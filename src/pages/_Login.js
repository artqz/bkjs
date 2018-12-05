import React, { Component } from 'react';
import { useState } from 'react-hot-loader';
import axios from 'axios';

const [count, setCount] = useState(0);
class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit() {
        const data = {
            grant_type: 'password',
            client_id:'2',
            client_secret: 'YuMGy00bQjOewsIS2A9XNnvkkReoLNTpHWipAn3a',
            username: 'djoctuk@yandex.ru',
            password: '110789'
        }    
        // axios.post('http://127.0.0.1:8000/oauth/token', data)
        // .then((res) => console.log(res)//this.context.router.push('/')
        // )
        // .catch(err => console.log(err)); 
        
    }
    render() {        
        const { login, password } = this.state;
        return (
            <div>
                <input type="text" name="email" value={login} onChange={this.onChange.bind(this)} />
                <input type="password" name="password" value={password} onChange={this.onChange.bind(this)} />
                <button onClick={this.onSubmit.bind(this)}>Auth</button>
            </div>
        );
    }
}
export default (Login);