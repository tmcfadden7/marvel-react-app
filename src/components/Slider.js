import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import logo from '../assets/marvel-logo.jpg';

const Slider = ({ characters }) => {
	return (
		<section className='slider-container'>
			<div>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={30}
					slidesPerView={4}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					// loop={true}
					// style={{ transform: 'translate3d(676.875px, 0px, 0px)' }}
				>
					{characters.map((character) => {
						let noImg = character.thumbnail.path.includes('.jpg')
							? character.thumbnail.path
							: character.thumbnail.path + '.' + character.thumbnail.extension;
						noImg = !noImg.includes('image_not_available') ? noImg : logo;
						return (
							<SwiperSlide
								key={character.id}
								// style={{ transform: 'translateZ(0)' }}
								style={{ transform: 'translate3d(150px, 0px, 0px)' }}
							>
								<div className='card'>
									<div className='char-name d-flex justify-content-center align-items-center py-5'>
										<h1 className='text-center'>{character.name}</h1>
									</div>
									<div className='card-img'>
										<img
											src={noImg}
											alt={character.name}
											className='img-fluid p-0'
										/>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Slider;
