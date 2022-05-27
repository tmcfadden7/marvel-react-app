import Character from './Character';

const CharacterGrid = ({ characters, isLoading }) => {
	return (
		<>
			<div className='container char-grid-container mt-4'>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					<div className='row justify-content-around'>
						{characters.map((character) => {
							return <Character {...character} />;
						})}
					</div>
				)}
			</div>
		</>
	);
};

export default CharacterGrid;
