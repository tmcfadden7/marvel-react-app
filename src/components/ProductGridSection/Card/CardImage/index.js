import logo from '../../../../assets/marvel-logo.jpg';

const CardImage = ({ title, thumbnail }) => {
	const img = thumbnail?.path || thumbnail;
	const imgExt = thumbnail?.extension || thumbnail.imageExt;

	let noImg = img.includes('.jpg') ? img : img + '.' + imgExt;
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	return (
		<div className='card-img'>
			<img src={noImg} alt={title} className='img-fluid p-0' />
		</div>
	);
};

export default CardImage;
