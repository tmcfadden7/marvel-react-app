import React, { useState } from 'react';
import {
	getAuth,
	confirmPasswordReset,
	sendPasswordResetEmail,
} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import { Button } from 'react-bootstrap';
import MarvelBG from '../../src/assets/Marvel-Background.jpg';

function useQuery() {
	const location = useLocation();
	return new URLSearchParams(location.search);
}

const ResetPassword = ({ characters, comics }) => {
	const [email, setEmail] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const query = useQuery();
	const oobCode = query.get('oobCode');
	console.log('oobCode', oobCode);

	const handleResetPassword = async (e) => {
		e.preventDefault();
		try {
			const auth = getAuth();
			if (oobCode) {
				await confirmPasswordReset(auth, oobCode, newPassword);
				toast('🚀 Password reset successful! 🚀', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: 'dark',
					transition: Bounce,
				});
				setTimeout(() => {
					navigate('/login');
				}, 3000);
			} else {
				await sendPasswordResetEmail(auth, email, {
					url: 'http://localhost:3000/login/',
				});
				toast('📧 Please check your email! 📧', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: 'dark',
					transition: Bounce,
				});
				setEmail('');
			}

			setSuccessMessage('Password reset successfully.');
			setError(null);
		} catch (error) {
			setError('Error resetting password. Please try again.');
		}
	};

	return (
		<section
			className='sign-up-container d-flex flex-row justify-content-center py-5'
			style={{
				backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
			}}
		>
			<div className='sign-up-form bg-white text-dark mx-md-5 p-4 p-md-5 my-5 rounded-3'>
				<h1 className='h2'>Reset Password</h1>
				<p className='text-muted'>
					Email may take a few minutes to be received. Please check your spam.
				</p>
				<form onSubmit={handleResetPassword}>
					{oobCode ? (
						<input
							type='password'
							className='form-control mt-3'
							id='password'
							placeholder='Password'
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					) : (
						<>
							<input
								type='email'
								className='form-control mt-3'
								id='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<p className='email-help'>
								We'll never share your email with anyone.
							</p>
						</>
					)}
					{error && <p style={{ color: 'red' }}>{error}</p>}
					{successMessage && (
						<p className='my-0' style={{ color: 'green' }}>
							{successMessage}
						</p>
					)}
					<Button
						variant='light'
						className='btn-outline-dark text-white mt-4'
						style={{ background: '#e62429' }}
						type='submit'
					>
						{oobCode ? 'Reset Password' : 'Send reset password email'}
					</Button>
				</form>
			</div>
		</section>
	);
};

export default ResetPassword;
