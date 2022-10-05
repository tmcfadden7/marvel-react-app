import React from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const auth = getAuth();
	const navigate = useNavigate();

	const logOut = () => {
		if (auth.currentUser) {
			auth.signOut();
			navigate('/');
		}
	};
	return (
		<section className='profile-container mt-4'>
			<div className='container'>
				<div className='profile'>
					<div className='avatar'>IMAGE</div>
					<div className='name'>
						<p>NAME</p>
					</div>
					<button onClick={logOut}>Log Out</button>
					<div className='about'>
						<p>ABOUT ME</p>
					</div>
				</div>
				<div className='profile-card'>FAV CHARACTER CARDS</div>
			</div>
		</section>
	);
};

export default Profile;
