import React from 'react';
import Tooltip from "../tooltip";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import style from "./videogames.module.css";

function Videogame({id, name, background_image, genres}) {


    return (
        <div className={style.a}>
              <div className={style.prueba}>
                <Link className={style.link} to={`/Videogame/${id}`}>
                  <div
                    style={{
                      backgroundImage: `url(${background_image})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={style.img}
                  ></div>
                </Link>
                <div className={style.texto}>
                  <div className={style.link}> {name} </div>
                  <div className={style.genres}>
                    {genres &&
                      genres.map((genre) => {
                        return (
                          <>
                            <div >
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
            </div>
    )
}

export default React.memo(Videogame)
