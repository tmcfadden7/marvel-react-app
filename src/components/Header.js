import React from 'react';
import SignIn from './SignIn';

const Header = () => {
	return (
		<>
			<section className='showcase-container'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-6 text-white'>
							<h1 className='headline mb-5'>Explore Marvel</h1>
							<p className='h3'>
								Find an old favorite comic or find a new one!
							</p>
						</div>
						<div className='col-12 col-md-6 bg-white text-dark p-4 card'>
							<SignIn />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
