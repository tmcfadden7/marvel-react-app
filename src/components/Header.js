import React from 'react';
import SignIn from './SignIn';

const Header = () => {
	return (
		<>
			<section className='showcase-container'>
				<div className='container'>
					<div className='d-flex'>
						<div className='text-white'>
							<h1 className='headline mb-5'>Explore Marvel</h1>
							<p className='h3'>
								Find an old favorite comic or find a new one!
							</p>
						</div>
						<SignIn />
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
