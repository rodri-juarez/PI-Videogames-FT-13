import style from "./videogames.module.css";
import { useState, useEffect } from "react";
import Videogame from "./Videogame";
import PropTypes from 'prop-types';


function Videogames({
  render,
  gameSearch,
  gamesCreator,
  filterByGenres,
  currentVideogames,
}) {
  const [games, setGames] = useState(currentVideogames);

  useEffect(() => {
    if (render === "videogames") return setGames(currentVideogames);
    if (render === "gamesCreator") return setGames(gamesCreator);
    if (render === "gameSearch") return setGames(gameSearch);
    if (render === "gamesByGenres") return setGames(filterByGenres);
  }, [render, currentVideogames, gamesCreator, gameSearch, filterByGenres]);

  return (
    <section className={style.section}>
      {games &&
        games.map(({ id, name, background_image, genres }) => (
          <Videogame
            key={id}
            id={id}
            name={name}
            background_image={background_image}
            genres={genres}
          />
        ))}
    </section>
  );
}

Videogames.propTypes = {
  render: PropTypes.string,
  gameSearch: PropTypes.arrayOf(PropTypes.object),
  gamesCreator: PropTypes.arrayOf(PropTypes.object),
  filterByGenres: PropTypes.arrayOf(PropTypes.object),
  currentVideogames: PropTypes.arrayOf(PropTypes.object)
};

export default Videogames;