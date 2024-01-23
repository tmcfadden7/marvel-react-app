import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import { useEffect, useLayoutEffect, useState } from 'react';
import DetailsLoader from './DetailsLoader';
import NavigateBack from '../NavigateBack';

const ProductDetailSection = ({ product, isLoading }) => {
	const [productDetails, setProductDetails] = useState(null);
	const [productDetailsLoading, setProductDetailsLoading] = useState(true);
	const location = useLocation();
	let { itemId } = useParams();

	useEffect(() => {
		const productType = location.pathname.includes('comics')
			? 'comics'
			: 'characters';
		const getItemDetails = product.filter((item) => {
			return Number(item.id) === Number(itemId) ? item : null;
		});
		const itemInfo = getItemDetails.map((item) => {
			return item;
		});
		const getProduct = async () => {
			if (itemInfo.length > 0) {
				const getItemDetails = product.filter((item) => {
					return Number(item.id) === Number(itemId) ? item : null;
				});
				const itemInfo = getItemDetails.map((item) => {
					return item;
				});
				setProductDetails(itemInfo);
				setProductDetailsLoading(false);
			} else {
				try {
					const response = await axios(
						`https://gateway.marvel.com/v1/public/${productType}/${itemId}?ts=1&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH_KEY}`
					);
					const data = await response.data.data.results;
					setProductDetails(data);
					setProductDetailsLoading(false);
				} catch (error) {
					console.log('DEBUG ProductDetailSection Error:', error);
				}
			}
		};
		getProduct();
	}, [itemId, location.pathname, product]);

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
				<NavigateBack />
				<div className='container'>
					<div className='row justify-content-around'>
						{isLoading || productDetailsLoading ? (
							<div className='product-details-container'>
								<div className='container py-5'>
									<div className='product-details-header p-sm-5'>
										<DetailsLoader />
									</div>
								</div>
							</div>
						) : (
							<>
								{productDetails.map((content) => {
									return (
										<ProductDetails
											key={content.id}
											content={content}
											{...productDetails}
										/>
									);
								})}
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetailSection;
