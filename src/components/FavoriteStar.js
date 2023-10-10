import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { db } from '../firebase.config';
import {
	collection,
	getDocs,
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
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const whichFavorites = favorite.title ? 'favComics' : 'favCharacters';
	const favoritesCollectionRef = collection(db, whichFavorites);
	const auth = getAuth();

	console.log('AUTH: ', auth);

	useEffect(() => {
		const q = query(collection(db, whichFavorites));
		onSnapshot(q, (querySnapshot) => {
			setFavoritesFromDb(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
		});
	}, []);

	console.log('favoritesFromDb', favoritesFromDb);
	console.log('fav', favorite);

	const favMatch = favoritesFromDb.filter((fav) => {
		console.log('does it match', fav.itemId, favorite.id);
		return fav.itemId === favorite.id;
	});
	console.log('YES', favMatch);

	const isFavSavedInDb = favMatch.length > 0;

	const addToFavorites = async (favorite) => {
		if (!auth.currentUser) {
			handleShow();
			return;
		} else if (favMatch.length === 0) {
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
				console.log('ERROR: ', error);
			}
		} else {
			const favDoc = doc(db, 'favorites', favMatch[0].id.toString());
			await deleteDoc(favDoc);
		}
	};

	return (
		<>
			<Button
				variant={isFavSavedInDb ? 'dark' : 'light'}
				onClick={() => addToFavorites(favorite)}
			>
				{isFavSavedInDb ? (
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
				{isFavSavedInDb ? ' Remove from ' : ' Add to '}
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
