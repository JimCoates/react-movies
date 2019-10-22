import React, { useState, useEffect }from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './home/home'

const App = () => {

  return(
    <Switch>
      <Route exact path = "/" component= {Home } />
    </Switch>
  )
}

export default App;
