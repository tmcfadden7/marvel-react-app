import React from 'react';
import Details from '../../components/Details';

const ComicDetails = ({ comics }) => {
	return (
		<>
			<Details items={comics} />
		</>
	);
};

export default ComicDetails;
