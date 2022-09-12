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
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			// spaceBetween={10}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{characters.map((character) => {
				let noImg = character.thumbnail.path.includes('.jpg')
					? character.thumbnail.path
					: character.thumbnail.path + '.' + character.thumbnail.extension;
				noImg = !noImg.includes('image_not_available') ? noImg : logo;
				return (
					<SwiperSlide key={character.id}>
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
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			...
		</Swiper>
	);
};

export default Slider;
