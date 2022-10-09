import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/marvel-logo.jpg';

const NavBar = () => {
	return (
		<nav className='navbar sticky-top navbar-expand-lg navbar-light'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					<img src={logo} alt='' className='d-inline-block align-text-top' />
				</Link>
				<button
					className='navbar-toggler text-light bg-light'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link to='/' className='nav-link active text-light'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/characters' className='nav-link text-light'>
								Characters
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/comics' className='nav-link text-light'>
								Comics
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;