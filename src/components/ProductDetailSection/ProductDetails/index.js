import Image from 'react-bootstrap/Image';
import FavoriteStar from '../../FavoriteStar';

const ProductDetails = ({ content }) => {
	return (
		<section className='product-details-container'>
			<div className='container py-5'>
				<div className='product-details-header px-sm-5 py-5 mx-auto text-white text-center rounded-5'>
					<div className='row'>
						<div className='col-12 col-md-6 mb-5 mb-md-0'>
							<h1 className='h2 mb-3'>
								{content.name ? content.name : content.title}
							</h1>
							<p>{content.description}</p>
							{content.creators && content.creators.items.length > 0 ? (
								<>
									Creators:&nbsp;
									{content.creators.items.map((creator, index) => {
										return (
											<div key={index}>
												<p>
													{creator.name} - {creator.role},&nbsp;
												</p>
											</div>
										);
									})}
								</>
							) : (
								''
							)}
							<FavoriteStar favorite={content} />
						</div>
						<div className='col-12 col-md-6'>
							<Image
								thumbnail
								src={`${content.thumbnail.path}.${content.thumbnail.extension}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
