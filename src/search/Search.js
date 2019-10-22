import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Search = (props) => {
    const [title, setTitle] = useState("");

    const callHandleSearch = (e) => {
        e.preventDefault();
        props.search(title);
    }
   
    return (
        <div className = "search-div">
            <form className = "search-box-wrapper">
                    <input 
                        className = "search-box-input"
                        value = {title} 
                        placeholder = "Title" 
                        onChange= { e => setTitle(e.target.value) }
                    />
                <button className = "search-box-button" onClick = {callHandleSearch}>
                    <FontAwesomeIcon icon = {faSearch} size = "2x" className="search-icon"/>
                </button>
            </form>
        </div>
    )
}

export default Search;