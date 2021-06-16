import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from '../components/home/index'
/* import Nav from "../components/Nav"; */
import Page from "../components/paginaInicial";
import PageCreated from "../components/pageCreate";
import VideogameDetail from '../components/videogameDetail/index.jsx'
/* import { useSelector } from "react-redux"; */


function App() {
  /* const videogames = useSelector((store) => store.videogames);
 */

  /* function onFilter(videogame) {
    let juego = videogames.filter(game => game.id === videogame.id);
    if(juego.length > 0) {
      console.log('console log de juego en onFilter')
      console.log(juego[0])
        return juego[0];
    } else {
        return null;
    }
  } */
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
  