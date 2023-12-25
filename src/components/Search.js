const Search = ({ setProduct, productType }) => {
	return (
		<section className='search-container'>
			<div className='container '>
				<form className='d-flex'>
					<input
						className='form-control my-5  mx-auto border border-dark border-3'
						type='search'
						placeholder={`Search ${productType}`}
						onKeyUp={(e) => {
							e.target.value ? setProduct(e.target.value) : setProduct('a');
						}}
					/>
				</form>
			</div>
		</section>
	);
};

export default Search;
