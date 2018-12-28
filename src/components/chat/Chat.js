import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import ScrollToBottom from 'react-scroll-to-bottom';
import { sendMessage, getMessages, getUsers } from '../../actions/ChatActions';
import './Chat.css';

const User = props => {
	const { user } = props;

	return (
		<div className="user">
			<span className="circle" />
			<span className="username">{user.name}</span>
			<span className="level">[{user.level}]</span>
		</div>
	);
};

const emotes = [
	{ name: '4Head', src: 'assets/emotes/twitch/4head.0' },
	{ name: 'Kappa', src: 'assets/emotes/twitch/Kappa.0' },
	{ name: 'OMEGALUL', src: 'assets/emotes/twitch/OMEGALUL.0' },
	{ name: 'chompy', src: 'assets/emotes/twitch/chompy.gif' },
	{ name: 'DatSheffy', src: 'assets/emotes/twitch/DatSheffy.0' },
	{ name: 'KappaClaus', src: 'assets/emotes/twitch/KappaClaus.0' },
	{ name: 'KappaPride', src: 'assets/emotes/twitch/KappaPride.0' },
	{ name: 'KKomrade', src: 'assets/emotes/twitch/KKomrade.png' },
	{ name: 'KKona', src: 'assets/emotes/twitch/KKona.0' },
	{ name: 'LUL', src: 'assets/emotes/twitch/LUL.0' },
	{ name: 'MingLee', src: 'assets/emotes/twitch/MingLee.0' },
	{ name: 'PogChamp', src: 'assets/emotes/twitch/PogChamp.0' },
	{ name: 'WutFace', src: 'assets/emotes/twitch/WutFace.0' },
];

const Message = props => {
	const { message } = props;
	const wordArray = message.text.split(' ');

	const textAndEmoties = wordArray.map((word, index) => {
		let emojiObject = [];
		emotes.map(emoji => {
			if (emoji.name === word) {
				return (emojiObject = emoji);
			}
			return null;
		});
		if (emojiObject.name === word) {
			return (
				<React.Fragment key={index}>
					<img alt={word} src={emojiObject.src} />{' '}
				</React.Fragment>
			);
		}
		return <React.Fragment key={index}>{word} </React.Fragment>;
	});

	return (
		<div className="message">
			<span className="date">{moment(message.date).format('HH:mm')}</span>
			<span className="username">
				{message.is_system ? 'Системное сообщение' : message.sender.name}:
			</span>
			<span className="text">{textAndEmoties}</span>
		</div>
	);
};

const Chat = () => {
	const [settings, setSetting] = useState({ isLoading: true });
	const [users, setUser] = useState([]);
	const [messages, setMessage] = useState([]);
	const [form, setValue] = useState({ text: '' });
	const intervalRef = useRef();

	const updateForm = e => {
		setValue({ text: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		sendMessage(form.text);
		setValue({ text: '' });
	};

	useEffect(() => {
		const id = setInterval(() => {
			getMessages().then(res => {
				setMessage(res);
				setSetting({ isLoading: false });
			});
			getUsers().then(res => {
				setUser(res);
			});
		}, 1000);
		intervalRef.current = id;
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<div className="chat">
			{!settings.isLoading ? (
				<React.Fragment>
					<ScrollToBottom className="messages">
						{messages
							? messages.map((message, index) => (
									<Message key={index} message={message} />
							  ))
							: null}
					</ScrollToBottom>
					<div className="users">
						<div className="online">Онлайн: {users.length}</div>
						{users
							? users.map((user, index) => <User key={index} user={user} />)
							: null}
					</div>
					<div>
						<div className="inputBox">
							<form onSubmit={handleSubmit}>
								<input
									name="text"
									className="input"
									autoComplete="off"
									value={form.text}
									onChange={updateForm}
								/>
							</form>
						</div>
						<div className="buttonBox" />
					</div>
				</React.Fragment>
			) : (
				<div className="loading">Loading...</div>
			)}
		</div>
	);
};

export default Chat;
