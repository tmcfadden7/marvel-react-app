import React from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import MarvelBG from '../../assets/Marvel-Background2.jpg';
import FavoriteStar from '../../components/FavoriteStar';
import ComicDetails from '../../components/ComicDetails';

const Details = ({ comics }) => {
	return (
		<>
			<ComicDetails comics={comics} />
		</>
	);
};

export default Details;
