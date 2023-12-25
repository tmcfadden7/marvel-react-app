import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import { useLayoutEffect } from 'react';

const ProductDetailSection = ({ product, isLoading }) => {
	let { itemId } = useParams();
	const getItemDetails = product.filter((item) => {
		return Number(item.id) === Number(itemId) ? item : null;
	});
	const itemInfo = getItemDetails.map((item) => {
		return item;
	});

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section
				className='product-detail-section-container'
				style={{
					backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
				}}
			>
				<div className='container mt-4 py-5'>
					{isLoading ? (
						<h2>Loading...</h2>
					) : (
						<div className='row justify-content-around'>
							{itemInfo.map((content) => {
								return (
									<ProductDetails
										key={content.id}
										isLoading
										content={content}
										{...itemInfo}
									/>
								);
							})}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ProductDetailSection;
