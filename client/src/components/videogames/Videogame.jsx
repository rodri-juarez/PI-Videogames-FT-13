import React from "react";
import PropTypes from 'prop-types';
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import style from "./videogames.module.css";

function Videogame({ id, name, background_image, genres }) {
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

                  <div key={genre.name}>
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      interactive
                      title={`${genre.name}`}
                    >
                      <div className={style.margin}>
                        <Icon name={genre.name} />
                      </div>
                    </Tooltip>
                  </div>

                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

Videogame.propTypes = {
  name: PropTypes.any.isRequired,
  background_image: PropTypes.string.isRequired,
  genres: PropTypes.array,
};

export default React.memo(Videogame);
