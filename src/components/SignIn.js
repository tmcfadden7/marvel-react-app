import React, { useEffect, useState } from 'react';
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [user, setUser] = useState({});

	const navigate = useNavigate();

	const auth = getAuth();

	// IS THIS WORKING?
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, [auth]);
	console.log('MY USER: ', user);

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setFormData({
				email: '',
				password: '',
			});
			console.log(userCredential);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{!auth.currentUser ? (
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
					</div>{' '}
				</>
			) : (
				<>
					<p>you are logged in already</p>
				</>
			)}
		</>
	);
};

export default SignIn;
