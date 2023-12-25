import ProductGridSection from '../../ProductGridSection';

const CharacterSection = ({ characters, isCharLoading, setProduct }) => {
	return (
		<ProductGridSection
			isLoading={isCharLoading}
			products={characters}
			productType={'characters'}
			seeMoreText={'See more characters'}
			seeMoreLink={'/characters'}
			setProduct={setProduct}
		/>
	);
};

export default CharacterSection;
