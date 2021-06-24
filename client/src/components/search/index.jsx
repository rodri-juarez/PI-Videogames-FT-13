import React, { useState } from "react";
import style from "./search.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ busquedaPorNombre }) {
  const [name, setName] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    busquedaPorNombre(name);
  }

  return (
    <div className={style.search}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button
          
          className={style.btn}
          type="submit"
        >
          <FaSearch />
        </button>
        <input
          className={style.input}
          placeholder="Search videogame"
          type="text"
          id="videogame"
          autoComplete="off"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default React.memo(SearchBar)