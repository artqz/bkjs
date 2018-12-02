import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/login';

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
        
        this.props.login(data)
        .then((res) => console.log(res)//this.context.router.push('/')
        )
        .catch(err => console.log(err)); 
        
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
Login.propTypes = {
    login: PropTypes.func.isRequired
}
Login.contextType = {
    router: PropTypes.object.isRequired
}
export default connect(null, { login })(Login);