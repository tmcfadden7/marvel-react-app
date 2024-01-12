import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getDocs,
	collection,
	query,
	where,
	orderBy,
	limit,
} from 'firebase/firestore';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase.config';
import { Button } from 'react-bootstrap';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();
	const location = useLocation();

	const auth = getAuth();

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				const page = location.pathname;
				if (page.toLowerCase().includes('signin')) {
					navigate('/profile');
				} else {
					navigate('/');
				}
				setFormData({
					email: '',
					password: '',
				});
			})
			.catch((error) => {
				console.log('DEBUG SignIn Error:', error);
			});
	};

	return (
		<>
			<div className='bg-white text-dark p-4 form-container d-flex flex-column h-100 justify-content-center'>
				<div>
					<div className='sign-up-header'>
						<h2>Welcome!</h2>
					</div>
					<form onSubmit={onSubmit}>
						<div className='my-3'>
							<input
								type='email'
								className='form-control'
								id='email'
								placeholder='Email'
								value={email}
								onChange={onChange}
							/>
							<p className='email-help'>
								We'll never share your email with anyone.
							</p>
						</div>

						<div className='my-3'>
							<input
								type='password'
								className='form-control'
								id='password'
								placeholder='Password'
								value={password}
								onChange={onChange}
							/>
						</div>
						<Button
							variant='light'
							className='btn-outline-dark text-white'
							style={{ background: '#e62429' }}
							type='submit'
						>
							Sign in
						</Button>
					</form>
					<p className='mt-3 text-muted' style={{ fontSize: '18px' }}>
						Don't have an account?{' '}
						<Link
							to='/sign-up'
							style={{ fontSize: '16px', textDecoration: 'underline' }}
						>
							<strong>Sign Up</strong>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default SignIn;
