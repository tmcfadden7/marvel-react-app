import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	query,
	onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { TbLetterM } from 'react-icons/tb';
import { Button } from 'react-bootstrap';
import Slider from '../components/Slider';

const Profile = () => {
	const [favCharacterFromDb, setFavCharacterFromDb] = useState(null);
	const [favComicFromDb, setFavComicFromDb] = useState(null);
	const auth = getAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const characterQuery = query(collection(db, 'favCharacters'));
		onSnapshot(characterQuery, (querySnapshot) => {
			setFavCharacterFromDb(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
		});
		const comicQuery = query(collection(db, 'favComics'));
		onSnapshot(comicQuery, (querySnapshot) => {
			setFavComicFromDb(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
		});
	}, []);

	const logOut = () => {
		if (auth.currentUser) {
			auth.signOut();
			navigate('/');
		}
	};
	return (
		<section className='profile-container mt-5 mx-sm-5 bg-light rounded-5'>
			<div className='container mt-5 text-center'>
				<div className='profile px-md-5'>
					<div className='avatar bg-light rounded-5'>
						<TbLetterM
							size={125}
							color='#fff'
							style={{
								backgroundColor: '#e62429',
								borderRadius: '65px',
								marginTop: '40px',
							}}
						/>
					</div>
					<div className='row mt-5 py-5 px-2 rounded-5 text-white personal-section'>
						<div className='col-12 col-md-6'>
							<p className='display-6'>Display name:</p>
							<p className='display-name h3'>{auth?.currentUser.displayName}</p>
						</div>
						<div className='col col-md-6 mt-5 mt-md-0'>
							<p className='display-6'>Created:</p>
							<p className='h3'>{auth?.currentUser.metadata.creationTime}</p>
						</div>
						<div className='col-12 col-md-6 mt-5'>
							<p className='display-6'>About:</p>
							<p className='h3'>ADD ABOUT TO FIREBASE</p>
						</div>
						<div className='col col-md-6 mt-5'>
							<p className='display-6'>Last login:</p>
							<p className='h3'>{auth?.currentUser.metadata.lastSignInTime}</p>
						</div>
					</div>
					<div className='row justify-content-around mt-5 p-0'>
						<p className='display-6'>Your Favorite Characters</p>
						{favCharacterFromDb && (
							<Slider products={favCharacterFromDb} linkPath={'characters'} />
						)}
						<div className='d-flex justify-content-center'>
							<Link to='/characters'>
								<Button
									style={{ backgroundColor: '#e62429' }}
									variant='light'
									className='fs-4 text rounded-pill p-3 border border-3 border-dark text-white'
								>
									Find more characters
								</Button>
							</Link>
						</div>
					</div>
					<div className='row justify-content-around mt-5 p-0'>
						<p className='display-6'>Your Favorite Comics</p>

						{favComicFromDb && (
							<Slider products={favComicFromDb} linkPath={'comics'} />
						)}
						<div className='d-flex justify-content-center'>
							<Link to='/comics'>
								<Button
									style={{ backgroundColor: '#e62429' }}
									variant='light'
									className='fs-4 text rounded-pill p-3 border border-3 border-dark text-white'
								>
									Find more comics
								</Button>
							</Link>
						</div>
					</div>
					<div className='d-flex justify-content-center pb-5 mt-5'>
						<Button
							variant='danger'
							onClick={logOut}
							className='border border-2 border-dark'
							style={{ backgroundColor: '#e62429' }}
						>
							Log out
						</Button>{' '}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
