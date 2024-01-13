import { Link } from 'react-router-dom';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import CardHeader from './Card/CardHeader';
import CardImage from './Card/CardImage';
import { Button } from 'react-bootstrap';
import { useLayoutEffect } from 'react';
import Search from '../Search';
import Pagination from '../Pagination';
import CardLoader from './Card/CardLoader';
import { useLocation } from 'react-router-dom';

const ProductGridSection = ({
	isLoading,
	products,
	productType,
	seeMoreText,
	seeMoreLink,
	setProduct,
}) => {
	const location = useLocation();
	useLayoutEffect(() => {
		const page = location.pathname;
		if (
			page.toLowerCase().includes('comics') ||
			page.toLowerCase().includes('characters')
		) {
			window.scrollTo(0, 0);
		}
	}, [location.pathname]);

	return (
		<>
			<Search
				setProduct={setProduct}
				productType={productType}
				products={products}
			/>
			<Pagination setProduct={setProduct} />
			<section
				className='product-grid-section'
				style={{
					backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
				}}
			>
				{!isLoading && products.length === 0 ? (
					<div className='container d-flex justify-content-center pb-5 mb-5'>
						<h1 className='bg-dark text-white p-5 mb-5 rounded-pill text-center'>
							NO RESULTS FOUND
						</h1>
					</div>
				) : (
					<div className='container mt-4 py-5'>
						<div className='row'>
							{isLoading ? (
								<>
									<CardLoader />
									<CardLoader />
									<CardLoader />
									<CardLoader />
								</>
							) : (
								<>
									{products.map((product, index) => {
										return (
											<div
												key={`${product.id}${index}${
													product.title || product.name
												}`}
												className='col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4'
											>
												<Link
													to={`/${productType}/${product.id}`}
													className='text-decoration-none'
												>
													<div className='card'>
														<CardHeader title={product.title || product.name} />
														<CardImage
															title={product.title}
															thumbnail={product.thumbnail}
														/>
													</div>
												</Link>
											</div>
										);
									})}
								</>
							)}
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
				)}
			</section>
		</>
	);
};

export default ProductGridSection;
