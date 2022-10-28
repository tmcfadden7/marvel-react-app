import MarvelBG from '../../assets/Marvel-Background.jpg';
import HomeCharacter from './HomeCharacter';

const HomeCharacterGrid = ({ characters, isLoading }) => {
	return (
		<section
			className='home-char-grid-container mt-5'
			style={{
				backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
			}}
		>
			<div className='container mt-4 py-5'>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					<div className='row justify-content-around'>
						{characters.map((character) => {
							return (
								<HomeCharacter key={character.id} isLoading {...character} />
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeCharacterGrid;
