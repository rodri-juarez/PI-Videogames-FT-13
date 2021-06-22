import style from "./filtros.module.css";

export default function Filtros({ filtroPorCreador, setByGenres, genres }) {
  return (
    <>
      <label className={style.label}>Filter by:</label>
      <button
        className={style.btn}
        onClick={() => {
          filtroPorCreador();
        }}
      >
        Creator
      </button>

      <select
        className={style.select}
        name="genres"
        defaultValue="---"
        onChange={(e) => setByGenres(e.target.value)}
      >
        {" "}
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
