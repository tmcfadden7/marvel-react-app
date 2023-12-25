import ProductDetailSection from '../../components/ProductDetailSection';

const Characters = ({ characters, isLoading }) => {
	console.log('isLoading', isLoading);
	return <ProductDetailSection product={characters} isLoading={isLoading} />;
};

export default Characters;
