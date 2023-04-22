import React from 'react';
import Details from '../../components/Details';

const CharacterDetails = ({ characters }) => {
	console.log('CHAR CharacterDETAILS', characters);
	return <Details items={characters} />;
};

export default CharacterDetails;
