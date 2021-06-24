import style from './createVideogame.module.css'

export default function Genres ({setNewVideogame, newVideogame, generos}){

    return(
        <div className={style.border}>
          <label className={style.label} for="genres">
            Genre:{" "}
          </label>

          <select
          className={style.select}
            name="genres"
            onChange={(e) =>
              setNewVideogame({
                ...newVideogame,
                genres: [...newVideogame.genres, e.target.value],
              })
            }
          >
            <option defaultValue="" selected>
              Select a Genre
            </option>
            {generos.map((genre) => {
              return <option key={genre.id}>{genre.name}</option>;
            })}
          </select>
        </div>
    )
}