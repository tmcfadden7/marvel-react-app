import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

const Header = () => {
	return (
		<>
			<section className='showcase-container'>
				<div className='container'>
					<div className='grid'>
						<div className='text-white align-self-start'>
							<h1 className='headline mb-5'>Explore Marvel</h1>
							<p className='lead'>
								Find an old favorite comic or find a new one! Lorem ipsum dolor
								sit amet consectetur adipisicing elit.
							</p>
							<Link to='/'>
								<button className='btn btn-outline-danger text-white'>
									Learn More
								</button>
							</Link>
						</div>
						<SignIn />
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
