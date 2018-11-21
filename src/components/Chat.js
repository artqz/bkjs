import React, { Component } from 'react';
import axios from 'axios';

class Chat extends Component {
    state = {
        messages: []
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/chat`).then(res => {
            console.log(res);
            this.setState({ messages: res.data });
            console.log(this.state.messages);
        })
    }
    render() {
        return (
            <div>
            {this.state.messages.map(message => (
                <li key={message.id}>{message.text}</li>
            ))}
            </div>
        );
    }
}

export default Chat;