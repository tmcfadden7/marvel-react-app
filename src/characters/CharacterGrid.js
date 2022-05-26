import Character from './Character';

const CharacterGrid = ({ characters, isLoading }) => {
	return (
		<>
			<div className='container mt-4'>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					<div className='row'>
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
