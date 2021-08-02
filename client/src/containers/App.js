import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CircularIndeterminate  from '../components/MaterialUI/CircularIndeterminate';
import "./App.css";

const PaginaInicial = lazy(() =>
  import("../components/paginaInicial/PaginaInicial")
);
const Home = lazy(() => import("./home/index"));
const CreateVideogame = lazy(() => import("../components/createVideogame"));

const VideogameDetail = lazy(() =>
  import("../components/videogameDetail/index.jsx")
);
const NotFound = lazy(() => import("../components/notFound"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<CircularIndeterminate />}>
          <Switch>
            <Route exact path="/">
              {" "}
              <PaginaInicial />{" "}
            </Route>
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App;
