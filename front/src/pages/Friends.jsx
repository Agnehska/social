import React from 'react';
import UserStore from '../stores/user-store';
import { observer } from 'mobx-react-lite';

const Friends = observer(() => {
	const { user, errorBack } = UserStore;

	console.log(user)

	return (
		<div className='p-4 flex flex-wrap items-center justify-center'>
			<div className='flex-shrink-0 m-6 relative overflow-hidden bg-blue-400 rounded-lg max-w-xs shadow-lg'>
				<svg
					className='absolute bottom-0 left-0 mb-8 transform'
					viewBox='0 0 375 283'
					fill='none'
				>
					<rect
						x='159.52'
						y='175'
						width='152'
						height='152'
						rx='8'
						transform='rotate(-45 159.52 175)'
						fill='white'
					/>
					<rect
						y='107.48'
						width='152'
						height='152'
						rx='8'
						transform='rotate(-45 0 107.48)'
						fill='white'
					/>
				</svg>
				<div className='relative pt-10 px-10 flex items-center justify-center'>
					<div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 gradient'></div>
					<img
						className='relative w-40'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png'
						alt=''
					/>
				</div>
				<div className='relative text-white px-6 pb-6 mt-6'>
					<span className='block opacity-75 -mb-1'>22.12.2000</span>
					<div className='flex justify-between'>
						<span className='block font-semibold text-xl'>Peace Lily</span>
						{/* <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
							$36.00
						</span> */}
					</div>
				</div>
			</div>
			<div className='flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg'>
				<svg
					className='absolute bottom-0 left-0 mb-8 transform'
					viewBox='0 0 375 283'
					fill='none'
				>
					<rect
						x='159.52'
						y='175'
						width='152'
						height='152'
						rx='8'
						transform='rotate(-45 159.52 175)'
						fill='white'
					/>
					<rect
						y='107.48'
						width='152'
						height='152'
						rx='8'
						transform='rotate(-45 0 107.48)'
						fill='white'
					/>
				</svg>
				<div className='relative pt-10 px-10 flex items-center justify-center'>
					<div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 gradient'></div>
					<img
						className='relative w-40'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png'
						alt=''
					/>
				</div>
				<div className='relative text-white px-6 pb-6 mt-6'>
					<span className='block opacity-75 -mb-1'>12.01.1996</span>
					<div className='flex justify-between'>
						<span className='block font-semibold text-xl'>Tommi Pack</span>
						{/* <span className='block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
							$45.00
						</span> */}
					</div>
				</div>
			</div>
			<div className='flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg'>
				<svg
					className='absolute bottom-0 left-0 mb-8 transform'
					viewBox='0 0 375 283'
					fill='none'
				>
					<rect
						x='159.52'
						y='175'
						width='152'
						height='152'
						rx='8'
						transform='rotate(-45 159.52 175)'
						fill='white'
					/>
					<rect
						y='107.48'
						width='152'
						height='152'
						rx='8'
						transform='rotate(-45 0 107.48)'
						fill='white'
					/>
				</svg>
				<div className='relative pt-10 px-10 flex items-center justify-center'>
					<div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 gradient'></div>
					<img
						className='relative w-40'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png'
						alt=''
					/>
				</div>
				<div className='relative text-white px-6 pb-6 mt-6'>
					<span className='block opacity-75 -mb-1'>28.02.2002</span>
					<div className='flex justify-between'>
						<span className='block font-semibold text-xl'>Oak Tree</span>
						<span className='block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
							$68.50
						</span>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Friends;
