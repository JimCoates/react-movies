import React from 'react';
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from '@reach/router'

const Header = () => {
    return (
            
            <div className = "logo-header">
                 <Link to="/">
                    <FontAwesomeIcon icon = { faFilm } size = "3x" className = "film-logo"/>
                    <h1 className = "logo-text">The Movie List</h1>
                </Link>
            </div>
    )
}

export default Header;