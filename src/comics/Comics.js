import logo from '../../src/marvel-comics.png';

const Comics = ({ title, thumbnail }) => {
	let noImg = thumbnail.path + '.jpg';
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	const titleLength = (title) => {
		if (title.length > 35) {
			return 'h3';
		} else {
			return '';
		}
	};
	console.log(title.length);
	return (
		<>
			<div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
				<div className='card' title={title}>
					<div className='char-name d-flex justify-content-center align-items-center py-5'>
						<h1 className={`text-center ${titleLength(title)}`}>{title}</h1>
					</div>
					<div className='card-img'>
						<img src={noImg} alt={title} className='img-fluid p-0' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Comics;
