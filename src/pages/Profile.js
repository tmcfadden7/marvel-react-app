import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/marvel-logo.jpg';

const Profile = () => {
	const auth = getAuth();
	const navigate = useNavigate();

	// IS THIS WORKING?
	// useEffect(() => {
	// 	onAuthStateChanged(auth, (currentUser) => {
	// 		setUser(currentUser);
	// 	});
	// }, [auth]);

	console.log('MYAUTH: ', auth);

	const logOut = () => {
		if (auth.currentUser) {
			auth.signOut();
			navigate('/');
		}
	};
	return (
		<section className='profile-container mt-4 mx-5 bg-light'>
			<div className='container d-flex justify-content-center'>
				<div className='profile text-center'>
					<div className='avatar'>
						<img src={logo} alt='Marvel Logo' />
					</div>
					<div className='name mt-5'>
						<p>DISPLAY NAME</p>
						{/* <p>{auth.currentUser.displayName}</p> */}
					</div>
					<div className='about my-5'>
						<p>ABOUT ME</p>
					</div>
					<button onClick={logOut}>Log Out</button>
					<div className='profile-card mt-5'>FAV CHARACTER CARDS</div>
					<div className='profile-card mt-5'>FAV COMIC CARDS</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
