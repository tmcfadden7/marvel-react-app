import logo from '../../src/marvel-logo.jpg'

const Character = ( {name, description, thumbnail} ) => {
    let noImg = thumbnail.path + '.jpg';
    noImg = !noImg.includes('image_not_available') ? noImg : logo ;
    return (
        <>
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card">
                <h1>{name}</h1>
                <img src={noImg} alt={name} className="img-thumbnail" />
                <div className="card-body">
                    <p>{description}</p>
                </div>
                {/* <p>{comics[1]}</p> */}
            </div>
            </div>
        </>
    )
}

export default Character
