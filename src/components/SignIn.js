import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = () => {};

	const onSubmit = async (e) => {
		e.preventDefault();
	};
	return (
		<>
			<div className='sign-up-header'>
				<h2>Sign in</h2>
				<p className='lead'>Create your own Marvel multiverse!</p>
			</div>
			<form onSubmit={onSubmit}>
				<div className='mb-3'>
					<label htmlFor='Email' className='form-label'>
						Email
					</label>
					<input
						type='email'
						className='form-control'
						id='email'
						value={email}
						onChange={onChange}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>

				<div className='mb-3'>
					<label htmlFor='Password' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
			<div className='mt-3'>
				<Link to='/'>Sign Up instead</Link>
			</div>
		</>
	);
};

export default SignIn;
