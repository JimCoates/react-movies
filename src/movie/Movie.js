import React from 'react';
import { IMG_URL } from '../constants/constants';

const Movie = ({movie}) => {

    return(
        <div className = "movieBox">
             <img className = "poster" src = {IMG_URL + movie.poster_path} alt = ""/>                
        </div>
    )
}

export default Movie;