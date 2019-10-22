import React from 'react';
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className = "logo-header">
            <FontAwesomeIcon icon = { faFilm } size = "3x" className = "film-logo"/>
            <h1 className = "logo-text">The Movie List</h1>
        </div>
    )
}

export default Header;