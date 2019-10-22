import React from 'react';
import { GET_MOVIE, APIkey } from '../constants/constants';

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount () {
        fetch(GET_MOVIE + this.props.id + "?api_key=" + APIkey + "&language=en-US")
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(movie =>
        this.setState({
            detail: movie.overview,
            image: movie.poster_path,
            title: movie.original_title,
            runtime: movie.runtime,
            genres: movie.genres
        }), console.error())
    }
    
    render () {
        
        const {title } = this.state;
        
        return(
            <div>
                <h1>{ title }</h1>
                <p>{this.props.id}</p>
            </div>
        );

    }
}

export default MovieDetails;