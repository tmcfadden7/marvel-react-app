import React from 'react';

const Pagination = ({ setProduct }) => {
	const alpha = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	return (
		<section className='pagination-container pb-5'>
			<div className='container'>
				<div className='d-flex flex-wrap justify-content-center'>
					{alpha.map((bet) => {
						return (
							<button
								key={bet}
								onClick={(e) => setProduct(e.target.innerHTML)}
								className='btn btn-dark btn-pagination border border-danger'
							>
								{bet}
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Pagination;
