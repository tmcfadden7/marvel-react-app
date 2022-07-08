import React from 'react';

const FavCharacter = ({ favCharacters }) => {
	console.log('MY FAV3: ', favCharacters);
	return (
		<section className='fav-character-container'>
			<div className='container py-5'>
				<div className='row'>
					<div className='col-sm-6'>
						<div className='char-name'>FavCharacter</div>
						<div className='char-name'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius
							debitis, quos ipsam illum hic vel perferendis libero, rem impedit
							ducimus, voluptates reiciendis cupiditate quas illo delectus.
							Quam, non eligendi.
						</div>
					</div>
					<div className='col-sm-6'>
						<div className='char-name'>FavCharacter</div>
						<div className='char-name'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius
							debitis, quos ipsam illum hic vel perferendis libero, rem impedit
							ducimus, voluptates reiciendis cupiditate quas illo delectus.
							Quam, non eligendi.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FavCharacter;
