import style from './createVideogame.module.css'

export default function Description ({setNewVideogame, newVideogame}){

    return(
        <div className={style.border}>
          <label className={style.label} for="Description">
            Description:{" "}
          </label>
          <input
            className={style.input}
            type="text"
            name="Description"
            placeholder="Description..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, description: e.target.value })
            }
            required
          />
        </div>
    )
}