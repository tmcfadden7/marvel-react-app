import CharacterSection from '../components/Products/CharacterSection';
import ComicSection from '../components/Products/ComicSection';
import RandomProduct from '../components/RandomProduct';

const Home = ({
	isCharLoading,
	characters,
	comics,
	isComLoading,
	setCharacterName,
	setComicTitle,
}) => {
	return (
		<>
			<section className='home-container'>
				<RandomProduct
					product={characters}
					productType={'characters'}
					isLoading={isCharLoading}
				/>
				<CharacterSection
					isCharLoading={isCharLoading}
					characters={characters}
					productType={'characters'}
					seeMoreText={'See more characters'}
					seeMoreLink={'/characters'}
					setProduct={setCharacterName}
				/>
				<RandomProduct
					product={comics}
					productType={'comics'}
					isLoading={isComLoading}
				/>
				<ComicSection
					comics={comics}
					isComLoading={isComLoading}
					productType={'comics'}
					seeMoreText={'See more comics'}
					seeMoreLink={'/comics'}
					setProduct={setComicTitle}
				/>
			</section>
		</>
	);
};

export default Home;
