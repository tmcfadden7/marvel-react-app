import logo from './marvel-logo.jpg'
import React from 'react'

const Header = ({getName}) => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#top">
                    <img src={logo} alt="" className="d-inline-block align-text-top" />
                </a>            
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                         <a className="nav-link active text-light" href="#top">Home</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link text-light" href="#characters">Characters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#comics">Comics</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 border border-danger border-3" type="search" placeholder="Search Character" onKeyUp={(e) => { e.target.value ? getName(e.target.value) : getName('a') }} />
                        {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                    </form>
                    </div>
                </div>
            </nav>
            <div className="showcase">

            </div>
        </>
    )
}

export default Header
