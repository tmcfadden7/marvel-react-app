import React from 'react';

const SectionHeader = ({ title, titleSize = 'h1' }) => {
	return (
		<div className='container px-0'>
			<div
				className='row bg-dark text-center p-3'
				style={{
					borderTopLeftRadius: '15px',
					borderTopRightRadius: '15px',
					borderBottom: '#e62429 2px solid',
				}}
			>
				<h1 className={`${titleSize} text-white mb-0`}>{title}</h1>
			</div>
		</div>
	);
};

export default SectionHeader;
