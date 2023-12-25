import ProductGridSection from '../../ProductGridSection';

const ComicSection = ({ comics, isComLoading, setProduct }) => {
	return (
		<ProductGridSection
			products={comics}
			isLoading={isComLoading}
			productType={'comics'}
			seeMoreText={'See more comics'}
			seeMoreLink={'/comics'}
			setProduct={setProduct}
		/>
	);
};

export default ComicSection;
