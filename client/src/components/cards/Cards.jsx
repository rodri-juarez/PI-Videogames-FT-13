import React from 'react';
import './Cards.css';
import axios from "axios";
import Card from './Card.jsx';

export default function Cards() {
  var juegos = [];

  axios.get("http://localhost:3001/videogames").then((recurso) => {
    /* if (recurso.data !== undefined) {
      
      recurso.data.map((juego) => {
        const videogame = {
          id: juego.id,
          name: juego.name,
          description: juego.description,
          rating: juego.rating,
          released: juego.released,
          plataforms: juego.plataforms,
          genres: juego.genres,
        };
        return juegos.push(videogame)
      }); */
      console.log(recurso.data)
    
    }
  );

  console.log(juegos)
  
  return (
    <div className='cards'>
      {juegos.map(c => <Card
          id={c.id}
          key={c.id}
          description={c.description}
          rating={c.rating}
          name={c.name}
          plataforms={c.plataforms}
          genres={c.genres}
        /> )}
    </div>
  );
}
