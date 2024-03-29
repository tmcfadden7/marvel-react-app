import React, { useState } from 'react';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { db } from '../firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MarvelBG from '../../src/assets/Marvel-Background.jpg';

const SignUp = () => {
	const [error, setError] = useState(null);
	const [showResetPassword, setShowResetPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		favCharacter: '',
		favComic: '',
	});

	const { name, email, favCharacter, favComic, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			updateProfile(auth.currentUser, {
				displayName: name,
			});

			// formDataCopy is for the firestore
			const formDataCopy = { ...formData };
			// don't want to store PW
			delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, 'users', user.uid), formDataCopy);

			setFormData({
				name: '',
				email: '',
				password: '',
				favCharacter: '',
				favComic: '',
			});
			setError(null);
			toast('🚀 Sign up successfull! 🚀', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'dark',
				transition: Bounce,
			});
			setShowResetPassword(false);
			navigate('/');
		} catch (error) {
			console.log('DEBUG SignUp Error: ', error);
			toast('🤕 Something went wrong! 🤕', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'dark',
				transition: Bounce,
			});
			if (error.code.toLowerCase() === 'auth/email-already-in-use') {
				setError(
					'Email is already in use. Please choose a different email or reset your password.'
				);
				setShowResetPassword(true);
			} else {
				setError('An error occurred during sign up. Please try again.');
			}
		}
	};

	return (
		<section
			className='sign-up-container d-flex flex-row justify-content-center py-5'
			style={{
				backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
			}}
		>
			<div className='sign-up-form bg-white text-dark mx-md-5 p-4 p-md-5 my-5 rounded-3'>
				<h1 className='h2'>Create a free account</h1>
				<p className='text-muted'>
					Become a member and start exploring the Marvel universe!
				</p>
				<form onSubmit={onSubmit}>
					<div className='mb-3'>
						<input
							type='text'
							className='form-control'
							id='name'
							placeholder='Name'
							value={name}
							onChange={onChange}
						/>
					</div>
					<div className='mb-3'>
						<input
							type='email'
							className='form-control'
							id='email'
							placeholder='Email'
							value={email}
							onChange={onChange}
						/>
						<div className='emailHelp'>
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className='mb-3'>
						<input
							type='password'
							className='form-control'
							id='password'
							placeholder='Password'
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className='mb-3'>
						<input
							type='text'
							className='form-control'
							id='favCharacter'
							placeholder='Who is your favorite character?'
							value={favCharacter}
							onChange={onChange}
						/>
					</div>
					<div className='mb-3'>
						<input
							type='text'
							className='form-control'
							id='favComic'
							placeholder='What is your favorite comic?'
							value={favComic}
							onChange={onChange}
						/>
					</div>
					<button className='btn sign-up-btn'>Submit</button>
				</form>
				{error && !showResetPassword && (
					<p className='text-danger mt-3 fs-5'>*{error}</p>
				)}
				{showResetPassword && (
					<p className='text-danger mt-3 fs-5'>
						Email is already in use. Please choose a different email or{' '}
						<Link to='/reset-password' style={{ textDecoration: 'underline' }}>
							reset your password
						</Link>
						.
					</p>
				)}
			</div>
		</section>
	);
};

export default SignUp;
