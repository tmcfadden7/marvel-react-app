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
	// console.log('MY USER: ', user);

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
					<div className='bg-white text-dark p-4 form-container'>
						<div className='sign-up-header'>
							<h2>Sign in</h2>
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
									We'll never share your email with anyone else.
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
							<button className='btn btn-primary'>Submit</button>
						</form>
						<Link to='/sign-up'>
							<p className='mt-3'>Sign Up instead</p>
						</Link>{' '}
					</div>
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
