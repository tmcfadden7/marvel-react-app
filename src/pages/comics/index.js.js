import ProductDetailSection from '../../components/ProductDetailSection';

const Comics = ({ comics, isLoading }) => {
	return <ProductDetailSection product={comics} isLoading={isLoading} />;
};

export default Comics;
