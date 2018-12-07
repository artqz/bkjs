import React, { useState, useEffect, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { sendMessage, getMessages, getUsers } from '../../actions/ChatAction';
import './Chat.css';
const Message = (props) => {
    const { message } = props;

    return (
        <div className="message">
            <span className="date">{message.date}</span>
            <span className="username">{message.user.name}:</span>
            <span className="text">{message.text}</span>
        </div>
    );
}
const Chat = () => {
    const [users, setUser] = useState([]);
    const [messages, setMessage] = useState([]);
    const [form, setValue] = useState({text: ''});
    const intervalRef = useRef()

    const updateForm = e => {
		setValue({text: e.target.value});
    };
    const handleSubmit = () => {
        sendMessage(form.text);
        setValue({text: ''});
    }

    useEffect(() => {
        const id = setInterval(() => {
            getMessages().then(res => {
                setMessage(res)            
            });
            getUsers().then(res => {
                setUser(res)            
            });
            
        }, 1000);
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
	}, []);
    return (
        <div className="chat">
            <ScrollToBottom className="messages">
                {(messages)?messages.map((message, index) => <Message key={index} message={message} />):null}
            </ScrollToBottom>
            <div className="users">
                Онлайн: {users.length}
                {(users)?users.map((user, index) => <div key={index}>{user.name}</div>):null}
            </div>
            <div><input name="text" value={form.text} onChange={updateForm} /><button onClick={handleSubmit}>Отправить</button></div>
        </div>
    );
}

export default Chat;