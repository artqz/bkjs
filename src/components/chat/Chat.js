import React, { useState, useEffect, useRef } from 'react';
import { sendMessage, getMessages } from '../../actions/ChatAction';
import './Chat.css';

const Chat = () => {
    const [messages, setMessage] = useState([]);
    const [form, setValue] = useState({text: ''});
    const intervalRef = useRef()

    const updateForm = e => {
		setValue({text: e.target.value});
    };
    const handleSubmit = () => {
        sendMessage(form.text).then(res => setMessage);
        setValue({text: ''});
    }

    useEffect(() => {
        const id = setInterval(() => {
            getMessages().then(res => {
                setMessage(res)            
            });
            
        }, 1000);
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
	}, []);
    return (
        <div className="chat">
            {(messages)?messages.map((message, index) => <div key={index}>{message.user.name}: {message.text}</div>):null}
            <div><input name="text" value={form.text} onChange={updateForm} /><button onClick={handleSubmit}>Отправить</button></div>
        </div>
    );
}

export default Chat;