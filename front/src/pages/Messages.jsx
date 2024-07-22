import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OneMessage from '../components/OneMessage';
import userStore from '../stores/user-store';

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const { user, token } = userStore;
  const navigate = useNavigate();

	useEffect(() => {
		if (user.fullname !== '') {
			fetch('http://localhost:5000/api/message',{
				headers: {Authorization: `Bearer ${token}`}
				
			})
			.then(data => data.json())
			.then(info => setMessages(info.data))
		} else {
			navigate('/')
		}
	}, [])

	const addMessage = (event) => {
		event.preventDefault();
		fetch('http://localhost:5000/api/message',{
			method: 'POST',
			headers: {Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json;charset=utf-8'},
			body: JSON.stringify({message})
			
		})
		.then(data => data.json())
		.then(info => {
			setMessages([...messages, info.file]);
			setMessage('')
		})
	}

	return (
		<div className='w-full px-5 flex flex-col justify-between'>
			<div className='flex flex-col mt-5'>
				{messages?.map(message =><OneMessage key={message._id} message={message} /> )}
			</div>
			<div className='py-5 flex flex-col'>
				<input
					className='w-full bg-gray-300 py-5 px-3 rounded-xl'
					type='text'
					placeholder='type your message here...'
					onChange={event => setMessage(event.target.value)}
					value={message}
				/>
				<button 
					className='w-60 mt-5 rounded-lg self-end p-2 border-2 border-indigo-600'
					onClick={addMessage}
				>Send</button>
			</div>
		</div>
	);
};

export default Messages;
