import style from './createVideogame.module.css'

export default function Rating ({setNewVideogame, newVideogame}){

    return(
        <div className={style.border}>
          <label className={style.label} for="Rating">
            Rating:{" "}
          </label>
          <input
            className={style.input}
            type="number"
            name="Rating"
            step="any"
            placeholder="Rating..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, rating: e.target.value })
            }
            required
          />
        </div>
    )
}