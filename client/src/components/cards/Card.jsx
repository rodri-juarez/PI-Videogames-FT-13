import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card(props) {
  
  
  
  return (
    <div className={style.a}>
      <div className={style.div}>
      {/* <h3>componente de cada juego</h3> */}
      <div className={style.prueba}>
        <div>
          <img src={props.videogame.background_image} alt="Imagen" width="400" height="200"></img>
        </div>
        <div className={style.prueba}>
        {" "}
                <Link to={`/Videogame/${props.videogame.id}`}>{props.videogame.name}</Link>{" "}
        </div>
        <div>
          {/* <p>{props.videogame.genres[0]}</p> */}
        </div>
      </div>
      </div>
    </div>
  );
}
