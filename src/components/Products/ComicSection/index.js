import ProductGridSection from '../../ProductGridSection';

const ComicSection = ({
	comics,
	isComLoading,
	setProduct,
	seeMoreText,
	seeMoreLink,
	productType,
}) => {
	return (
		<ProductGridSection
			products={comics}
			isLoading={isComLoading}
			productType={productType}
			seeMoreText={seeMoreText}
			seeMoreLink={seeMoreLink}
			setProduct={setProduct}
		/>
	);
};

export default ComicSection;
