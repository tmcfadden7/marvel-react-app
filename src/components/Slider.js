import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Link } from 'react-router-dom';
import CardHeader from './ProductGridSection/Card/CardHeader';
import CardImage from './ProductGridSection/Card/CardImage';

const Slider = ({ products, linkPath }) => {
	return (
		<section className='slider-container my-3'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={30}
				slidesPerView={1}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				slidesOffsetBefore={0}
				rewind={true}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{products.map((product) => {
					return (
						<SwiperSlide
							key={product.id}
							style={{
								justifyContent: 'center',
							}}
						>
							<Link
								to={`/${linkPath}/${product.itemId}`}
								className='text-decoration-none'
							>
								<div className='card'>
									<CardHeader title={product.title || product.name} />
									<CardImage
										title={product.title || product.name}
										thumbnail={`${product.image}.${product.imageExt}`}
									/>
								</div>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Slider;
