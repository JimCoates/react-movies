import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Home from './home/home'
import MovieDetails from './moviedetails/moviedetails'
import Header from './header/header';

const App = () => {

  return(
    <div className = "big-div">
      <Header></Header>
      <Router>
        <Home path = "/"/>
        <MovieDetails path = "/details/:id"/>
      </Router>
    </div>
  )
}

export default App;
