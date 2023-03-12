import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<section className='showcase-container'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col col-md-6 text-white align-self-start'>
							<h1 className='headline mb-5'>Explore Marvel</h1>
							<p className='lead'>
								Find an old favorite comic or find a new one! Lorem ipsum dolor
								sit amet consectetur adipisicing elit.
							</p>
							<Link to='/'>
								<button className='btn btn-outline-light text-white mt-3 mt-md-0'>
									Learn More
								</button>
							</Link>
							<Button
								className='d-md-none btn-outline-light text-white ms-3 mt-3'
								variant='light'
								style={{ background: '#e62429' }}
								onClick={handleShow}
							>
								Sign in/sign up
							</Button>
							<Modal show={show} onHide={handleClose}>
								<Modal.Body className='px-0 px-sm-3'>
									<SignIn />
								</Modal.Body>
								<Modal.Footer>
									<Button variant='secondary' onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
						<div className='col col-md-6 col-lg-4 d-none d-md-block'>
							<SignIn />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
