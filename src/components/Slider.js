import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Link } from 'react-router-dom';

const Slider = ({ characters, linkPath }) => {
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
				// centeredSlides={true}
				// centeredSlidesBounds={true}
				slidesOffsetBefore={0}
				rewind={true}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				// loop={true}
				// style={{ transform: 'translate3d(676.875px, 0px, 0px)' }}
			>
				{characters.map((character) => {
					return (
						<SwiperSlide
							key={character.id}
							style={{
								// transform: 'translate3d(125px, 0px, 0px)',
								justifyContent: 'center',
							}}
						>
							<Link
								to={`/${linkPath}/${character.itemId}`}
								className='text-decoration-none'
							>
								<div className='card'>
									<div className='char-name d-flex justify-content-center align-items-center py-5'>
										<h1 className='text-center'>
											{character.name || character.title}
										</h1>
									</div>
									<div className='card-img'>
										<img
											src={character.image + '.' + character.imageExt}
											alt={character.name || character.title}
											className='img-fluid p-0'
										/>
									</div>
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
