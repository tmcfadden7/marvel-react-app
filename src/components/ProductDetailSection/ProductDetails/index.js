import Image from 'react-bootstrap/Image';
import FavoriteStar from '../../FavoriteStar';

const ProductDetails = ({ content }) => {
	return (
		<section className='product-details-container rounded-5'>
			<div className='container p-1 p-sm-5 '>
				<div className='product-details-header px-sm-5 py-5 mx-auto text-white text-center rounded-5'>
					<div className='row'>
						<div className='col-12 col-md-6 mb-5 mb-md-0'>
							<h1 className='h2 mb-3'>
								{content.name ? content.name : content.title}
							</h1>
							<p>{content.description}</p>
							{content.creators && content.creators.items.length > 0 ? (
								<>
									<p className='h4'>Creators:</p>
									{content.creators.items.map((creator, index) => {
										return (
											<div key={index}>
												<p>
													{creator.name} - {creator.role.toUpperCase()}
												</p>
											</div>
										);
									})}
								</>
							) : (
								<></>
							)}
							<FavoriteStar favorite={content} />
						</div>
						<div className='col-12 col-md-6'>
							<Image
								thumbnail
								src={`${content.thumbnail.path}.${content.thumbnail.extension}`}
							/>
							<p className='fs-6 text text-center pt-2'>
								Data provided by Marvel. © 2014 Marvel
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
