import React from 'react';

const Login = () => {
	return (
		<section className='bg-white'>
			<div className='w-full mx-auto max-w-xl flex flex-col justify-center py-24   relative p-8'>
				<div className='prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl'>
					<div>
						<h1 className='text-center text-2xl mb-5 font-bold'>Log in form </h1>
						<p className='text-center'>
							Fill in the form below to log in to your account.
						</p>
					</div>
				</div>
				<div className='mt-3 border-t pt-4'>
					{/* <!--  Starts component --> */}
					<div x-data="{ loginEmail: '', loginPassword: '', passwordPattern: /^(?=.*[A-Z])(?=.*W).+$/, showPassword: false }">
						<form
							className='w-full divide-neutral-200 rounded-3xl bg-white shadow-2xl border p-8 lg:p-10'
							// x-on:submit.prevent="login"
						>
							<div className='py-2 space-y-3'>
								{' '}
								<label
									htmlFor='login_email'
									className='block text-sm text-gray-700'
								>
									Email
								</label>
								<input
									type='email'
									id='login_email'
									x-model='loginEmail'
									className='block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs'
									placeholder='Enter your email'
									required
								/>
								{/* <p
									x-show='!loginEmail'
									className='text-red-500 text-xs mt-1'
								>
									Email is required
								</p> */}
							</div>
							<div className='py-2 space-y-3'>
								{' '}
								<label
									htmlFor='login_password'
									className='block text-sm text-gray-700'
								>
									Password
								</label>
								<div className='relative'>
									{' '}
									<input
										type="showPassword ? 'text' : 'password'"
										id='login_password'
										x-model='loginPassword'
										className='block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-inset text-xs'
										placeholder='Enter your password'
										required
									/>
									<span
										className='absolute inset-y-0 right-0 flex items-center pr-4 text-xs text-gray-400 cursor-pointer'
										x-text="showPassword ? 'Hide' : 'Show'"
										// @click="showPassword = !showPassword"
									>
										Show
									</span>{' '}
								</div>
								<p className='text-gray-500 text-xs mt-1 lg:text-pretty'>
									Password must contain at least one capital letter and a special character.
								</p>
								{/* <p
									x-show='loginPassword &amp;&amp; !passwordPattern.test(loginPassword)'
									className='text-red-500 mt-1 text-xs'
									// style="display: none;"
								>
									Password does not meet requirements
								</p> */}
							</div>
							<div className='mt-4'>
								{' '}
								<button
									type='submit'
									className='rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full'
								>
									Login
								</button>{' '}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
