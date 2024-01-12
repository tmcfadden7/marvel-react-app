import ProductDetailSection from '../../components/ProductDetailSection';

const Characters = ({ characters, isLoading }) => {
	return <ProductDetailSection product={characters} isLoading={isLoading} />;
};

export default Characters;
