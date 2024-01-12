import React from 'react';
import SignIn from '../components/SignIn';
import RandomProduct from '../components/RandomProduct';
import characters1 from '../assets/Marvel-Characters-Placeholder1.jpg';
import characters2 from '../assets/Marvel-Characters-Placeholder2.jpg';
import characters3 from '../assets/Marvel-Characters-Placeholder3.jpg';
import { useMemo } from 'react';

const LogIn = ({ characters, comics }) => {
	const randomImage = useMemo(() => {
		return Math.floor(Math.random() * 3);
	}, []);

	const allImg = [characters1, characters2, characters3];
	return (
		<>
			<section className='login-container container'>
				<div className='d-flex'>
					<div className='flex-grow-1 w-100'>
						<SignIn />
					</div>
					<div className='flex-shrink-1 flex-lg-shrink-0 d-none d-md-block'>
						<img
							src={allImg[`${randomImage}`]}
							alt='Marvel Character'
							className='img-fluid'
						/>
					</div>
				</div>
				<div className='row mt-5'>
					<div className='col'>
						<RandomProduct product={characters} productType={'characters'} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<RandomProduct product={comics} productType={'comics'} />
					</div>
				</div>
			</section>
		</>
	);
};

export default LogIn;
