import React, { useState } from 'react';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		favCharacter: '',
		favComic: '',
	});

	const { name, email, about, favCharacter, favComic, password } = formData;

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
			console.log(userCredential);
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

			navigate('/');
		} catch (error) {
			console.log('ERROR: ', error);
		}
	};

	console.log('MYDOC: ', doc);
	return (
		<section className='sign-up-container'>
			<div className='d-flex h-100'>
				<div className='sign-up-form bg-white text-dark mx-md-5 p-3 p-md-5'>
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
								placeholder='Who is your favorite character'
								value={favCharacter}
								onChange={onChange}
							/>
						</div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control'
								id='favComic'
								placeholder='What is your favorite comic'
								value={favComic}
								onChange={onChange}
							/>
						</div>

						<button className='btn btn-primary'>Submit</button>
					</form>
				</div>
				<div className='sign-up-img w-100'></div>
			</div>
		</section>
	);
};

export default SignUp;
