import style from "./videogames.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Tooltip from "../tooltip";
import Icon from "../../customHooks/Icon";

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
    <section className={style.section}>
      {games &&
        games.map((videogame) => {
          return (
            <div
              key={videogame.id}
              /* style={{
                backgroundImage: `url(${videogame.background_image})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }} */
              className={style.a}
            >
              {/* <div className={style.div}> */}
              <div className={style.prueba}>
                <div
                  style={{
                    backgroundImage: `url(${videogame.background_image})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                  className={style.img}
                >
                  {/* <img
                        src={videogame.background_image}
                        alt="Imagen"
                        width="300"
                        height="180"
                      ></img> */}
                </div>
                <div className={style.texto}>
                  {" "}
                  <Link
                    className={style.link}
                    to={`/Videogame/${videogame.id}`}
                  >
                    {videogame.name}
                  </Link>{" "}
                  <div className={style.genres}>
                    {videogame.genres &&
                      videogame.genres.map((genre) => {
                        return (
                          <>
                          
                            <div className={style.e} >
                              
                              <Tooltip
                                content={`${genre.name}`}
                                direction="bottom"
                              >
                                <div className={style.margin}>
                                <Icon name={genre.name} />
                                </div>
                                {/* <p className={style.genre}>{genre.name}</p> */}
                              </Tooltip>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          );
        })}
    </section>
  );
}
