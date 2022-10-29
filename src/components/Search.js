import React from 'react';

const Search = ({ getName }) => {
	return (
		<section className='search-container pt-5'>
			<div className='container'>
				<form className='d-flex'>
					<input
						className='form-control m-5 border border-dark border-3'
						type='search'
						placeholder='Search Character'
						onKeyUp={(e) => {
							e.target.value ? getName(e.target.value) : getName('a');
						}}
					/>
				</form>
			</div>
		</section>
	);
};

export default Search;
