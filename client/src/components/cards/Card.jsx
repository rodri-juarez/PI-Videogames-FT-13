import React from "react";
import style from './Card.module.css'

export default function Card(props) {
  
  
 console.log(props.videogame) 
  return (
    <div className={style.a}>
      <div className={style.div}>
      {/* <h3>componente de cada juego</h3> */}
      <div className={style.prueba}>
        <div>
          <img src={props.videogame.background_image} alt="Imagen" width="400" height="200"></img>
        </div>
        <div className={style.prueba}>
          <p>{props.videogame.name}</p>
        </div>
        <div>
         {/*  <p>{props.videogame.genres[0]}</p> */}
        </div>
      </div>
      </div>
    </div>
  );
}
