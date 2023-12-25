import { Link } from 'react-router-dom';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import CardHeader from './Card/CardHeader';
import CardImage from './Card/CardImage';
import { Button } from 'react-bootstrap';
import { useLayoutEffect } from 'react';
import Search from '../Search';
import Pagination from '../Pagination';
import Skeleton from 'react-loading-skeleton';

const ProductGridSection = ({
	isLoading,
	products,
	productType,
	seeMoreText,
	seeMoreLink,
	setProduct,
}) => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Search setProduct={setProduct} productType={productType} />
			<Pagination setProduct={setProduct} />
			<section
				className='product-grid-section'
				style={{
					backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
				}}
			>
				<div className='container mt-4 py-5'>
					<div className='row'>
						{products.map((product, index) => {
							return (
								<div
									key={`${product.id}${index}${product.title || product.name}`}
									className='col-sm-6 col-md-6 col-lg-3 mb-4'
								>
									<Link
										to={`/${productType}/${product.id}`}
										className='text-decoration-none'
									>
										<div className='card'>
											{isLoading ? (
												<>
													<Skeleton
														containerClassName='px-2 py-5 product-title d-flex flex-column justify-content-center'
														count={2}
													/>
													<Skeleton
														height={'250px'}
														containerClassName='d-block d-md-flex flex-row'
													/>
													<Skeleton
														containerClassName='px-2 py-5 product-title d-flex flex-column justify-content-center'
														count={2}
													/>
													<Skeleton
														height={'250px'}
														containerClassName='d-block d-md-flex flex-row'
													/>
													<Skeleton
														containerClassName='px-2 py-5 product-title d-flex flex-column justify-content-center'
														count={2}
													/>
													<Skeleton
														height={'250px'}
														containerClassName='d-block d-md-flex flex-row'
													/>
												</>
											) : (
												<>
													<CardHeader title={product.title || product.name} />
													<CardImage
														title={product.title}
														thumbnail={product.thumbnail}
													/>
												</>
											)}
										</div>
									</Link>
								</div>
							);
						})}
					</div>
					{seeMoreText && seeMoreLink && (
						<div className='d-flex justify-content-center'>
							<Link to={seeMoreLink}>
								<Button
									variant='light'
									className='fs-4 text rounded-pill p-3 border border-3 border-dark'
								>
									{seeMoreText}
								</Button>
							</Link>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ProductGridSection;
