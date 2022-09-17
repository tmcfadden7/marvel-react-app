// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAPWYucAKJBWHiH5D85XjQZJYyKVbtsyAE',
	authDomain: 'marvel-app-794a9.firebaseapp.com',
	projectId: 'marvel-app-794a9',
	storageBucket: 'marvel-app-794a9.appspot.com',
	messagingSenderId: '68240606520',
	appId: '1:68240606520:web:637b0450844551b0826dcd',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
