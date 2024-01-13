import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Slider from '../components/Slider';
import MarvelBG from '../../src/assets/Marvel-Background.jpg';
import { format } from 'date-fns';
import SectionHeader from '../components/SectionHeader';
import Skeleton from 'react-loading-skeleton';

const Profile = () => {
	const [favCharacterFromDb, setFavCharacterFromDb] = useState(null);
	const [favComicFromDb, setFavComicFromDb] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserFavorites = async () => {
			const userRef = collection(db, 'users');
			const userQ = query(
				userRef
				// where('userRef', '==', auth.currentUser.uid)
			);

			const userQuerySnap = await getDocs(userQ);
			const user = [];
			userQuerySnap.forEach((doc) => {
				return user.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			setCurrentUser(
				user.filter((u) => {
					return u.id === auth.currentUser.uid;
				})
			);

			const charactersRef = collection(db, 'favCharacters');
			const charactersQ = query(
				charactersRef,
				where('userRef', '==', auth.currentUser.uid)
			);

			const charactersQuerySnap = await getDocs(charactersQ);
			const characters = [];
			charactersQuerySnap.forEach((doc) => {
				return characters.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			setFavCharacterFromDb(characters);

			const comicsRef = collection(db, 'favComics');
			const comicsQ = query(
				comicsRef,
				where('userRef', '==', auth.currentUser.uid)
			);

			const comicsQuerySnap = await getDocs(comicsQ);
			const comics = [];
			comicsQuerySnap.forEach((doc) => {
				return comics.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			setFavComicFromDb(comics);
			setIsLoading(false);
		};

		fetchUserFavorites();
	}, [auth.currentUser.uid]);

	const logOut = () => {
		if (auth.currentUser) {
			auth.signOut();
			navigate('/');
		}
	};

	return (
		<section
			className='profile-container pt-5'
			style={{
				backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
			}}
		>
			<div className='container text-center'>
				{isLoading ? (
					<>
						<div
							className='row bg-dark text-center p-3'
							style={{
								borderTopLeftRadius: '15px',
								borderTopRightRadius: '15px',
								borderBottom: '#e62429 2px solid',
							}}
						>
							<Skeleton width={'175px'} height={'25px'} />
						</div>
						<div className='row bg-black justify-content-center'>
							<div className='col col-md-6 mb-4'>
								<Skeleton className='mt-4' count={5} />
							</div>
						</div>
						<div
							className='row bg-dark text-center p-3 mt-5'
							style={{
								borderTopLeftRadius: '15px',
								borderTopRightRadius: '15px',
								borderBottom: '#e62429 2px solid',
							}}
						>
							<Skeleton width={'175px'} height={'25px'} />
						</div>
						<div className='row bg-black justify-content-center'>
							<div className='col col-md-6 mb-4'>
								<Skeleton className='mt-4' count={5} />
							</div>
						</div>
					</>
				) : (
					<>
						<SectionHeader
							title={auth?.currentUser.displayName.toUpperCase()}
						/>
						<div
							className='row py-5 px-2 text-white mb-5 '
							style={{ background: '#202020' }}
						>
							{/* <TbLetterM
							size={100}
							color='#fff'
							style={{
								backgroundColor: '#e62429',
								width: '100px',
							}}
							className='mx-auto rounded-circle'
						/> */}
							{currentUser[0]?.data?.favCharacter && (
								<div className='col-12'>
									<p className='fs-3 text'>
										Favorite character: {currentUser[0]?.data.favCharacter}
									</p>
								</div>
							)}
							{currentUser[0]?.data?.favComic && (
								<div className='col-12 mt-3'>
									<p className='fs-3 text'>
										Favorite comic: {currentUser[0]?.data.favComic}
									</p>
								</div>
							)}
							<div className='col-12 mt-3 '>
								<p className='fs-3 text'>
									Joined on{' '}
									{format(
										new Date(auth?.currentUser.metadata.creationTime),
										'MMM dd, yyyy'
									)}
								</p>
							</div>
							<div className='col-12 mt-3 '>
								<p className='fs-3 text'>
									Last login on{' '}
									{format(
										new Date(auth?.currentUser.reloadUserInfo.lastRefreshAt),
										'MMM dd, yyyy'
									)}
								</p>
							</div>
						</div>
						{/* FAVORITE CHARACTERS */}
						{favCharacterFromDb && favCharacterFromDb?.length > 0 && (
							<SectionHeader title={'Favorite Characters'} titleSize='h2' />
						)}
						<div className='row justify-content-around mb-5 p-0'>
							{favCharacterFromDb && favCharacterFromDb?.length > 0 && (
								<Slider products={favCharacterFromDb} linkPath={'characters'} />
							)}
							<div className='d-flex justify-content-center mt-4'>
								<Link to='/characters'>
									<Button
										style={{ backgroundColor: '#e62429' }}
										variant='light'
										className='fs-4 text rounded-pill p-3 border border-3 border-dark text-white'
									>
										{favCharacterFromDb && favCharacterFromDb?.length > 0
											? 'Find more characters'
											: 'Find your favorite characters'}
									</Button>
								</Link>
							</div>
						</div>
						{/* FAVORITE COMICS */}
						{favComicFromDb?.length > 0 && (
							<SectionHeader title={'Favorite Comics'} titleSize='h2' />
						)}
						<div className='row justify-content-around p-0'>
							{favComicFromDb?.length > 0 && (
								<Slider products={favComicFromDb} linkPath={'comics'} />
							)}
							<div className='d-flex justify-content-center mt-4'>
								<Link to='/comics'>
									<Button
										style={{ backgroundColor: '#e62429' }}
										variant='light'
										className='fs-4 text rounded-pill p-3 border border-3 border-dark text-white'
									>
										{favComicFromDb?.length > 0
											? 'Find more comics'
											: 'Find your favorite comics'}
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
							</Button>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Profile;
