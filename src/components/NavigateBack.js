import { useNavigate } from 'react-router-dom';

const NavigateBack = () => {
	const navigate = useNavigate();
	return (
		<div className='container'>
			<p
				className='text-white mb-0 p-2 rounded-2'
				onClick={() => navigate(-1)}
				style={{
					width: 'fit-content',
					background: 'rgba(0, 0, 0, 0.75)',
					cursor: 'pointer',
				}}
			>
				&lt; Back
			</p>
			;
		</div>
	);
};

export default NavigateBack;
