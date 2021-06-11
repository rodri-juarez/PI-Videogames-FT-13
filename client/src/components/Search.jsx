import React, { useState } from "react";
import axios from 'axios';
export default function SearchBar() {
  const [videogame, /* setVideogame */] = useState("");
  const [juego, setJuego] = useState("");

  function onSearch(videogame) {
    axios.get(
        `http://localhost:3001/videogames?name=${videogame}`,
        console.log("hola")
      )
      .then((recurso) => {
        console.log(recurso.data[0]);

        const videogames = {
          id: juego.id,
          key: juego.id,
          name: juego.name,
          description: juego.description,
          rating: juego.rating,
          released: juego.released,
          plataforms: juego.plataforms,
          genres: juego.genres,
        };
        setJuego(videogames);
      });
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(videogame);
        }}
      >
        <input
          type="text"
          placeholder="Videogame..."
          value={videogame}
         /*  onChange={(e) => setVideogame(e.target.value)} */
        />
        <input type="submit" value="Agregar" />
      </form>
      <h1>{juego.name}</h1>
    </>
  );
}





axios.get("http://localhost:3001/videogames", console.log('hola')).then((recurso) => {
     let juegos = [];
     console.log(recurso.data)
      recurso.data.map((juego) => {
        const videogame = {
          id: juego.id,
          key: juego.id,
          name: juego.name,
          description: juego.description,
          rating: juego.rating,
          released: juego.released,
          plataforms: juego.plataforms,
          genres: juego.genres,
        };
        return juegos.push(videogame)
      }); 
      /* setVideogames(()=> [juegos]) */
      
    }
  );