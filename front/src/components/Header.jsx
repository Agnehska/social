import logo from '../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useStores } from '../stores';
import UserStore from '../stores/user-store';
import { useNotification } from '../assets/hooks/useNotification';
import { useTranslation } from 'react-i18next';
import Languageselector from './translator/Languageselector';


export default function Header() {
	const navigate = useNavigate();
	const { userStore } = useStores();
	const logoutSuccess = useNotification('Logout success',  'success');
	const { user } = UserStore;

	const logout = async (e) => {
		e.preventDefault();
    const err = await userStore.logoutUser();
		console.log(err)
		logoutSuccess();
    navigate('/');
	}

	const { t } = useTranslation();

	return (
		<nav className='bg-blue-200 w-full'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 items-center justify-between'>
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
						{/* <!-- Mobile menu button--> */}
						<button
							type='button'
							className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
							aria-controls='mobile-menu'
							aria-expanded='false'
						>
							<span className='absolute -inset-0.5'></span>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='block h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
							<svg
								className='hidden h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
					<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
						<Link to='/profile' className='flex flex-shrink-0 items-center'>
							<img
								className='h-8 w-auto mr-5'
								src={logo}
								alt='Your Company'
							/>
						</Link>
						<p
							className='bg-blue-300 text-black-500 text-xl rounded-md px-3 py-2 text-sm font-medium'
							aria-current='page'
						>
							myApp
						</p>
					</div>
					{user.fullname !== '' ?
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<button
							type='button'
							className='relative rounded-full bg-blue-300 p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
						>
							<span onClick={logout} >Выйти</span>
					
						</button>

						{/* <!-- Profile dropdown --> */}
						<div className='relative ml-3'>
							<div>
							<Link to='/profile'>
								<button
									type='button'
									className='relative flex rounded-full bg-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
									id='user-menu-button'
									aria-expanded='false'
									aria-haspopup='true'
								>
									<span className='absolute -inset-1.5'></span>
									<span className='sr-only'>Open user menu</span>
										<img
											className='h-8 w-8 rounded-full'
											src={user.avatar}
											alt=''
										/>
								</button>
								</Link>
							</div>							
						</div>
					</div> :
					<Link to='/'>Войти</Link> }
					<Languageselector />
				</div>
			</div>
		</nav>
	);
}
