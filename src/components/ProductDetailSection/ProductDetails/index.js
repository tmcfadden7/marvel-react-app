import Image from 'react-bootstrap/Image';
import FavoriteStar from '../../FavoriteStar';
import { format, isValid } from 'date-fns';
import logo from '../../../assets/Marvel-Comics-Placeholder2.jpg';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({ content }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};
	const noImg = useMemo(() => {
		if (content) {
			if (
				content?.thumbnail &&
				content?.thumbnail?.path?.includes('image_not_available')
			) {
				return logo;
			} else {
				const img = content.thumbnail.path;
				const imgExt = content.thumbnail.extension;
				let thumbnail = img.includes('.jpg')
					? img
					: img.includes('.png')
					? img
					: img + '.' + imgExt;
				thumbnail = !thumbnail.includes('image_not_available')
					? thumbnail
					: logo;
				return thumbnail;
			}
		}
	}, [content]);
	return (
		<section className='product-details-container rounded-5'>
			<div className='container p-1 p-sm-5 '>
				<div className='product-details-header px-sm-5 py-5 mx-auto text-white text-center rounded-5'>
					<div className='row'>
						<div className='col-12 col-md-6 mb-5 mb-md-0'>
							<h1 className='h2 mb-3'>
								{content.name ? content.name : content.title}{' '}
							</h1>
							{content.prices && content.prices.length > 0 ? (
								<>
									{content.prices.map((price, index) => {
										if (price.type === 'printPrice' && price.price !== 0) {
											return (
												<p key={index + price.type + price.price}>
													<span className='h4'>Print price: </span>$
													{price.price}
												</p>
											);
										} else if (
											price.type === 'digitalPurchasePrice' &&
											price.price !== 0
										) {
											return (
												<p key={index + price.type + price.price}>
													<span className='h4'>Digital price: </span>$
													{price.price}
												</p>
											);
										} else return <></>;
									})}
								</>
							) : (
								<></>
							)}
							{content.dates && content.dates.length > 0 ? (
								<>
									{content.dates.map((date, index) => {
										if (date.type === 'onsaleDate' && isValid(date.date)) {
											return (
												<p key={index + date.type}>
													<span className='h4'>Release date: </span>
													{format(new Date(date.date), 'MMM dd, yyyy')}
												</p>
											);
										} else if (date.type === 'focDate' && isValid(date.date)) {
											return (
												<p key={index + date.type}>
													<span className='h4'>Final order date: </span>
													{format(new Date(date.date), 'MMM dd, yyyy')}
												</p>
											);
										} else return <></>;
									})}
								</>
							) : (
								<></>
							)}
							{content.pageCount ? (
								<p>
									<span className='h4'>Page count: </span>
									{content.pageCount}
								</p>
							) : (
								<></>
							)}
							<p>{content.description || 'No content description'}</p>
							{content.creators && content.creators.items.length > 0 ? (
								<>
									<p className='h4'>Creators:</p>
									{content.creators.items.map((creator, index) => {
										return (
											<div key={index + creator.name}>
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
							{content.comics && content.comics.items.length > 0 ? (
								<>
									{content.comics.items.map((comic, index) => {
										return (
											<>
												{isCollapsed && index < 5 ? (
													<>
														<Link
															key={index + comic.name}
															to={`/comics/${
																comic.resourceURI.split('/')[
																	comic.resourceURI.split('/').length - 1
																]
															}`}
														>
															<p>{comic.name}</p>
														</Link>
													</>
												) : (
													!isCollapsed && (
														<Link
															key={index + comic.name}
															to={`/comics/${
																comic.resourceURI.split('/')[
																	comic.resourceURI.split('/').length - 1
																]
															}`}
														>
															<p>{comic.name}</p>
														</Link>
													)
												)}
											</>
										);
									})}
									{content.comics.items.length > 4 && (
										<p
											onClick={toggleCollapse}
											style={{ color: '#fff', cursor: 'pointer' }}
										>
											{isCollapsed
												? '... Show more comics'
												: ' Show less comics'}
										</p>
									)}
								</>
							) : (
								<></>
							)}
							<FavoriteStar favorite={content} />
						</div>
						<div className='col-12 col-md-6'>
							<Image thumbnail src={noImg} />
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
