import React, { useEffect, useMemo, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { db } from '../firebase.config';
import {
	collection,
	addDoc,
	deleteDoc,
	doc,
	query,
	onSnapshot,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import SignIn from './SignIn';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

const FavoriteStar = ({ favorite }) => {
	const [favoritesFromDb, setFavoritesFromDb] = useState([]);
	const [userFavoritesFromDb, setUserFavoritesFromDb] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const auth = getAuth();
	const whichFavorites = favorite.title ? 'favComics' : 'favCharacters';
	const favoritesCollectionRef = collection(db, whichFavorites);

	useEffect(() => {
		const q = query(collection(db, whichFavorites));
		onSnapshot(q, (querySnapshot) => {
			setFavoritesFromDb(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
			return () => {
				setFavoritesFromDb([]);
			};
		});
	}, [whichFavorites]);

	useEffect(() => {
		if (auth?.currentUser?.uid) {
			const userFavs = favoritesFromDb.filter((fav) => {
				return fav.userRef === auth?.currentUser?.uid;
			});
			setUserFavoritesFromDb(userFavs);
		}
	}, [auth?.currentUser?.uid, favoritesFromDb]);

	const favMatch = useMemo(() => {
		if (userFavoritesFromDb.length > 0) {
			return userFavoritesFromDb.filter((fav) => {
				return fav.itemId === favorite.id;
			});
		} else return [];
	}, [favorite.id, userFavoritesFromDb]);

	const addToFavorites = async (favorite) => {
		if (!auth.currentUser) {
			handleShow();
			return;
		} else if (favMatch?.length === 0) {
			try {
				await addDoc(favoritesCollectionRef, {
					...(favorite.title
						? { title: favorite.title }
						: { name: favorite.name }),
					itemId: favorite.id,
					description: favorite.description,
					image: favorite.thumbnail.path,
					imageExt: favorite.thumbnail.extension,
					userRef: auth.currentUser.uid,
				});
			} catch (error) {
				console.log('DEBUG FavoriteStar Error: ', error);
			}
		} else {
			const favDoc = doc(db, whichFavorites, favMatch[0].id.toString());
			await deleteDoc(favDoc);
		}
	};

	return (
		<>
			<Button
				variant={favMatch?.length > 0 ? 'dark' : 'light'}
				onClick={() => addToFavorites(favorite)}
			>
				{favMatch?.length > 0 ? (
					<MdOutlineFavorite
						color='red'
						size={25}
						style={{ verticalAlign: 'bottom' }}
					/>
				) : (
					<MdOutlineFavoriteBorder
						color='red'
						fill='red'
						size={25}
						style={{ verticalAlign: 'bottom' }}
					/>
				)}
				{favMatch?.length > 0 ? ' Remove from ' : ' Add to '}
				favorites
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Please sign in to add a favorite</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SignIn />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default FavoriteStar;
