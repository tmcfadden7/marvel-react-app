import Pagination from '../../components/Pagination';
import Character from './Character';
import MarvelBG from '../../assets/Marvel-Background.jpg';

const CharacterGrid = ({ characters, isLoading, getName }) => {
	return (
		<>
			{/* <Pagination getName={getName} /> */}
			<section
				className='char-grid-container'
				style={{
					backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
				}}
			>
				<div className='container mt-4'>
					{isLoading ? (
						<h2>Loading...</h2>
					) : (
						<div className='row justify-content-around'>
							{characters.map((character) => {
								return (
									<Character key={character.id} isLoading {...character} />
								);
							})}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default CharacterGrid;
