import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from '../components/Home'
/* import Nav from "../components/Nav"; */
import Page from "../components/paginaInicial";
import PageCreated from "../components/pageCreate";


function App() {
  return (
    <div>
      <Router>
      <Route exact path='/'><Page /></Route>
      <Route exact path='/Home'><Home /></Route>
      <Route exact path='/CreateVideogame'><PageCreated /></Route>
      </Router>
    </div>
  );
}

export default App;
  