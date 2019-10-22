import React from 'react';
import { IMG_URL } from '../constants/constants';
import { Link } from '@reach/router'

const Movie = ({movie}) => {

    function formatDate(){
        var date = movie.release_date;
        return date.substring(0,4);
    }

    return(
        <div className = "movieBox">
            <Link to = {"/details/"+ movie.id }>
             <img className = "poster" src = {IMG_URL + movie.poster_path} alt = ""/>
             </Link>  
             <h2 className = "movie-name"> {movie.title} </h2>
             <h2 className = "movie-date"> ({formatDate()})</h2>     
                      
        </div>
    )
}

export default Movie;