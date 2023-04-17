import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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

const FavoriteStar = ({ favorite }) => {
	const [favoritesFromDb, setFavoritesFromDb] = useState([]);
	const favoritesCollectionRef = collection(db, 'favorites');
	const auth = getAuth();

	console.log('AUTH: ', auth);

	useEffect(() => {
		const q = query(collection(db, 'favorites'));
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
			alert('PLEASE SIGN UP/SIGNIN ');
			return;
		} else if (favMatch.length === 0) {
			try {
				await addDoc(favoritesCollectionRef, {
					name: favorite.title,
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
		<Button
			variant={isFavSavedInDb ? 'danger' : 'warning'}
			onClick={() => addToFavorites(favorite)}
		>
			{isFavSavedInDb ? 'Remove from ' : 'Add to '}favorites
		</Button>
	);
};

export default FavoriteStar;
