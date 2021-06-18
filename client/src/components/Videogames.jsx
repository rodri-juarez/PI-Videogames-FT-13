import style from "./cards/Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Videogames({
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
    <section>
     
      {games &&
        games.map((videogame) => {
          return (
            <div key={videogame.id}>
              <div className={style.a}>
                <div className={style.div}>
                  <div className={style.prueba}>
                    <div>
                      <img
                        src={videogame.background_image}
                        alt="Imagen"
                        width="400"
                        height="200"
                      ></img>
                    </div>
                    <div className={style.prueba}>
                      {" "}
                      <Link to={`/Videogame/${videogame.id}`}>
                        {videogame.name}
                      </Link>{" "}
                    </div>
                    <div>
                      {/* <p>{videogame.genres[0].name}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
