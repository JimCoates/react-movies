import React, { useState, useEffect }from 'react';
import Search from '../search/Search';
import { APIkey, SEARCH_MOVIE_URI } from '../constants/constants'
import Movie from '../movie/Movie';
import Header from '../header/header';

const Home = () => {
    
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(SEARCH_MOVIE_URI)
        .then(response => response.json())
        .then(jsonResponse => {
            setMovies(jsonResponse.results);
        });
    }, []);


    const handleSearch = searchValue => {
        var results = [];

        fetch("https://api.themoviedb.org/3/search/movie?api_key=" + APIkey + "&language=en-US&query=" + searchValue + "&page=1&include_adult=false")
        .then(resp => resp.json())
        .then(data => {data.results.forEach(element => {
            if(element.poster_path != null){
            results.push(element);
            }
        });
            console.log(data.results)
            setMovies(results)
            
        })
        .catch(function(error){
            console.log(error)
        });
    }

    return (
        <div className = "main">
            <Header/>
            <Search search = {handleSearch}></Search>
            <div className = "movie">
            {movies && movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie}></Movie>
            ))}
            </div>
        </div>
        );
}

export default Home;