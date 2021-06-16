import React, { useState } from "react";


export default function SearchBar({onGameSearchChange}) {
  

  const [name, setName] = useState()



  function handleChange(e) {
    setName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onGameSearchChange(name)
    /* dispatch(getVideogame(videogame)); */
  }
  console.log('en search')
  
  
  
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e) }>
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


/* export default function SearchBar() {
  const juego = useSelector(store => store.videogameSearch)
  const dispatch = useDispatch();
  const [videogame, setVideogame] = useState()



  function handleChange(e) {
    setVideogame(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getVideogame(videogame));
  }
  console.log('en search')
   console.log(juego)
   */
/*
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label /* className="label" htmlFor="title" */
          //>
          //*Search:{" "}
          /* </label>
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
} */


