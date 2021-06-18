import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from './home/index'
import Page from "../components/paginaInicial";
import PageCreated from "../components/pageCreate";
import VideogameDetail from '../components/videogameDetail/index.jsx'



function App() {
 
  return (
    <div>
      <Router>
      <Route exact path='/'><Page /></Route>
      <Route exact path='/Home'><Home /></Route>
      <Route exact path='/CreateVideogame'><PageCreated /></Route>
      <Route exact path='/Videogame/:id'
    render={({match}) => <VideogameDetail
          id={match.params.id}
        />} /> 
      </Router>
    </div>
  );
}

export default App;
  