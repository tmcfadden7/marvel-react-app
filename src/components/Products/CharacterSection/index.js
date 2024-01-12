import ProductGridSection from '../../ProductGridSection';

const CharacterSection = ({
	characters,
	isCharLoading,
	setProduct,
	seeMoreText,
	seeMoreLink,
	productType,
}) => {
	return (
		<ProductGridSection
			isLoading={isCharLoading}
			products={characters}
			productType={productType}
			seeMoreText={seeMoreText}
			seeMoreLink={seeMoreLink}
			setProduct={setProduct}
		/>
	);
};

export default CharacterSection;
