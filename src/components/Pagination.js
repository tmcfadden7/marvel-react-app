const Pagination = ({ getName }) => {
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
		<section className='pagination-container'>
			<div className='container'>
				<div className='d-flex flex-wrap justify-content-center'>
					{alpha.map((bet) => {
						return (
							<button
								key={bet}
								onClick={(e) => getName(e.target.innerHTML)}
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
