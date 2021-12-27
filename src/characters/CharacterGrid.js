
const CharacterGrid = ({ characters, isLoading }) => {
    return (
        <>
            <div className="container">
                {isLoading ? <h2>Loading...</h2> :
                characters.map((character) => {
                    return (
                        <h1 key={character.id}>{character.name}</h1>
                    )
                })}
            </div>
        </>
    )
}

export default CharacterGrid
