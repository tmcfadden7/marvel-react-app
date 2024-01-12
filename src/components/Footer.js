import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SignIn from './SignIn';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Footer = () => {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState(null);

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, [auth, setUser]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<section className='footer py-4'>
			<div className='container'>
				<div className='d-flex flex-column justify-content-center text-center '>
					{!user && (
						<>
							<Button
								className='btn-outline-dark text-dark mx-auto mb-3'
								variant='light'
								style={{ background: '#e62429' }}
								onClick={handleShow}
							>
								<p className='mb-0'>Sign in/sign up</p>
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
						</>
					)}
					<div className='mb-3'>
						<a
							href='https://www.instagram.com/marvel/?hl=en'
							target='_blank'
							rel='noreferrer'
							className='text-decoration-none text-dark me-3'
						>
							<BsInstagram />
						</a>
						<a
							href='https://www.facebook.com/Marvel/'
							target='_blank'
							rel='noreferrer'
							className='text-decoration-none text-dark me-3'
						>
							<BsFacebook />
						</a>
						<a
							href='https://twitter.com/Marvel'
							target='_blank'
							rel='noreferrer'
							className='text-decoration-none text-dark'
						>
							<BsTwitter />
						</a>
					</div>
					<p className='mb-0'>&#169; {new Date().getFullYear()} Marvel</p>
					<p className='fs-6 text'>(Data provided by Marvel. © 2014 Marvel)</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
