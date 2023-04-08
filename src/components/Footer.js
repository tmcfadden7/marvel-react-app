import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SignIn from './SignIn';

const Footer = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<section className='footer p-5'>
			<div className='container'>
				<div className='row d-flex align-items-center'>
					<div className='col-6 text-center'>
						<Button
							className='btn-outline-light text-white'
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
					<div className='col-6 text-center'>
						<p className='mb-0'>&#169;{new Date().getFullYear()} Marvel</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
