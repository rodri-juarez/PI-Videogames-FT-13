import React from 'react';
import style from "./filtros.module.css";

 function Filtros({
  setByGenres,
  genres,
  setCreator,
  noFilter,
}) {
  

  return (
    <>
      <label className={style.label}>Filter by:</label>

      <button
        className={style.btn}
        onClick={() => {
          noFilter();
        }}
      >
        Non Filter
      </button>
      <select
        className={style.select}
        name="creator"
        defaultValue="---"
        onChange={(e) => setCreator(e.target.value)}
      >
        <option value="---">Creator</option>
        <option value="Rawg Games">Rawg Games</option>
        <option value="Usuario">User</option>
      </select>

      <select
        className={style.select}
        name="genres"
        defaultValue="---"
        onChange={(e) => setByGenres(e.target.value)}
      >
        {" "}
        <option value="---">Genre</option>
        {genres.length > 0 &&
          genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
      </select>
    </>
  );
}

export default React.memo(Filtros)