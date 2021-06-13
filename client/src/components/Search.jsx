import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogame } from "../actions";

export default function SearchBar() {
  const juego = useSelector(store => store.videogame)
  const dispatch = useDispatch();
  const [videogame, setVideogame] = useState()



  function handleChange(e) {
    setVideogame(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getVideogame(videogame));
  }
 /*  
   */
  console.log('----ejecucion en search----')
  console.log(videogame)
  console.log(juego)
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label /* className="label" htmlFor="title" */>
            Search:{" "}
          </label>
          <input
            type="text"
            id="videogame"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          
        </div>
        <button type="submit">BUSCAR</button>
      </form>
    </>
  );
}

