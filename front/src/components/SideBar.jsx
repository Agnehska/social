import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Messages from '../pages/Messages';
import Friends from '../pages/Friends';
import { Profile } from '../pages/Profile';
import { Photoes } from '../pages/Photoes';
import { Music } from '../pages/Music';
import { Video } from '../pages/Video';
import { Wall } from '../pages/Wall';
import NotFound from '../pages/NotFound';
import Game from '../pages/Game';
import { useTranslation } from 'react-i18next';

const SideBar = () => {
	const { t } = useTranslation();

	return (
		<div className='flex w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container'>
			<div className='mr-5 min-w-72 h-90 bg-blue-200 py-10 px-5'>
				<div className='flex flex-col '>
					<Link
						to={'/profile'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.0')}
					</Link>
					<Link
						to={'/news'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.1')}
					</Link>
					<Link
						to={'/message'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.2')}
					</Link>
                    <Link
						to={'/friends'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.3')}
					</Link>
                    <Link
						to={'/music'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.4')}
					</Link>
                    <Link
						to={'/video'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.5')}
					</Link>
          <Link
						to={'/photoes'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.6')}
					</Link>
					<Link
						to={'/game'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{t('menu.7')}
					</Link>
				</div>
			</div>
			<div className='w-full max-h-80 overscroll-auto'>
				<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/message" element={<Messages />} />
						<Route path="/friends" element={<Friends />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/photoes" element={<Photoes />} />
						<Route path="/music" element={<Music />} />
						<Route path="/video" element={<Video />} />
						<Route path="/news" element={<Wall />} />
						<Route path="/game" element={<Game />} />
						<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
};

export default SideBar;
