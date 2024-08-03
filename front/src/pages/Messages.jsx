import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OneMessage from '../components/OneMessage';
import userStore from '../stores/user-store';
import { useFetchData } from '../assets/hooks/useFetchData';

const Messages =  () => {
	const [msg, setMsg] = useState('');
	const { token } = userStore;
  const navigate = useNavigate();
	const {res: messages, refetch} = useFetchData('GET', 'message', null, token)

	const addMessage = (event) => {
		event.preventDefault();
		fetch('http://localhost:5000/api/message',{
			method: 'POST',
			headers: {Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json;charset=utf-8'},
			body: JSON.stringify({message:msg})
		})
		.then(() => refetch())
		setMsg('')
	}

	return (
		<div className='w-full px-5 flex flex-col justify-between'>
			<div className='flex flex-col mt-5'>
				{token === '' ? navigate('/') : messages?.map(message =><OneMessage key={message._id} message={message} /> )}
			</div>
			<div className='py-5 flex flex-col'>
				<input
					className='w-full bg-gray-300 py-5 px-3 rounded-xl'
					type='text'
					placeholder='type your message here...'
					onChange={event => setMsg(event.target.value)}
					value={msg}
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
