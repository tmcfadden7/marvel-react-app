import Character from './Character';

const CharacterGrid = ({ characters, isLoading }) => {
	return (
		<>
			<section className='char-grid-container mt-4'>
				<div className='container'>
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
			</section>
		</>
	);
};

export default CharacterGrid;
