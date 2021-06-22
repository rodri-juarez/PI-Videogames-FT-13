import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css";
import Home from "./home/index";
import CreateVideogame from "../components/createVideogame";
import VideogameDetail from "../components/videogameDetail/index.jsx";
import PaginaInicial from "../components/paginaInicial/PaginaInicial";
import NotFound from '../components/notFound'

function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route exact path='/'> <PaginaInicial /> </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/CreateVideogame">
          <CreateVideogame />
          </Route>
          <Route
            exact
            path="/Videogame/:id"
            render={({ match }) => <VideogameDetail id={match.params.id} />}
          />
          <Route path='*'><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
