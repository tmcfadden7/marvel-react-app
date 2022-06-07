import React from 'react';
import { Link } from 'react-router-dom';
import logo from './marvel-logo.jpg';

const Header = ({ getName }) => {
	return (
		<>
			<nav className='navbar sticky-top navbar-expand-lg navbar-light'>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
						<img src={logo} alt='' className='d-inline-block align-text-top' />
					</Link>
					<button
						className='navbar-toggler'
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
						<form className='d-flex'>
							<input
								className='form-control me-2 border border-danger border-3'
								type='search'
								placeholder='Search Character'
								onKeyUp={(e) => {
									e.target.value ? getName(e.target.value) : getName('a');
								}}
							/>
							{/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
						</form>
					</div>
				</div>
			</nav>
			<section className='showcase'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-6 text-white'>
							<h1>Explore Marvel</h1>
							<p>Find an old favorite comic or find a new one!</p>
						</div>
						<div className='col-12 col-md-6'>
							<div className='card'>
								<div className='char-name d-flex justify-content-center align-items-center py-5'>
									<h1 className={`text-center`}>TITLE OR NAME</h1>
								</div>
								<div className='card-img'>IMAGE</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
