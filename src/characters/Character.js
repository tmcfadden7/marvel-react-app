import logo from '../../src/marvel-logo.jpg';

const Character = ({ name, thumbnail, id }) => {
	let noImg = thumbnail.path + '.jpg';
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	return (
		<>
			<div key={id} className='col-sm-12 col-md-6 col-lg-4 mb-4'>
				<div className='card'>
					<div className='char-name d-flex justify-content-center align-items-center py-5'>
						<h1 className='text-center'>{name}</h1>
					</div>
					<div className='card-img'>
						<img src={noImg} alt={name} className='img-fluid p-0' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Character;
