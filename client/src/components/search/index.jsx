import React, { useState } from "react";
import style from "./search.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onGameSearchChange }) {
  const [name, setName] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onGameSearchChange(name);
  }

  return (
    <div className={style.search}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button
          placeholder="Search videogame"
          className={style.btn}
          type="submit"
        >
          <FaSearch />
        </button>
        <input
          className={style.input}
          type="text"
          id="videogame"
          autoComplete="off"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}
