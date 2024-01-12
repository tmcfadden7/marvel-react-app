const CardHeader = ({ title }) => {
	return (
		<div className='product-title d-flex justify-content-center align-items-center py-5'>
			<h1 className={`${title?.length > 40 ? 'h4' : 'h2'} text-center`}>
				{title}
			</h1>
		</div>
	);
};

export default CardHeader;
