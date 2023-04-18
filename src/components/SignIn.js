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
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase.config';
import { Button } from 'react-bootstrap';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [user, setUser] = useState({});
	const [userFavCharacter, setUserFavCharacter] = useState('');

	const navigate = useNavigate();

	const auth = getAuth();

	useEffect(() => {
		const fetchFavCharacters = async () => {
			try {
				const fetchCollection = collection(db, 'users');

				const q = query(
					fetchCollection,
					where('favCharacter', '!=', '')
					// orderBy('timestamp', 'desc'),
					// limit(1)
				);

				const querySnap = await getDocs(q);
				const fav = [];

				querySnap.forEach((doc) => {
					// console.log('MYDATA', doc.data());

					//NOT WORKING
					return fav.push(...fav, {
						data: doc.data(),
					});
				});
				console.log('MYDATA', fav[0].data.email);

				fav.forEach((char) => {
					console.log('CHARA', char);

					if (user.email === char.data.email) {
						setUserFavCharacter(char.favCharacter);
					} else {
						console.log('NOT WORKING');
					}
				});
			} catch (e) {
				console.log('GET DOC ERROR', e);
			}
		};

		fetchFavCharacters();
	}, [user]);

	useEffect(() => {
		const favMarvelCharacter = async () => {
			const response = await axios(
				`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${userFavCharacter}&limit=5&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
			);
			const data = await response.data.data.results;

			console.log(data);
		};

		favMarvelCharacter();
	}, [userFavCharacter]);

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

	console.log('AUTH: ', auth);

	return (
		<>
			{!auth.currentUser ? (
				<>
					<div className='bg-white text-dark p-4 form-container'>
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
