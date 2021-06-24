import style from './createVideogame.module.css'

export default function Name ({setNewVideogame, newVideogame}){

    return(
        <div className={style.border}>
          <label className={style.label} for="Name">
            Name:{" "}
          </label>
          <input
            className={style.input}
            type="text"
            name="Name"
            placeholder="Name..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, name: e.target.value })
            }
            required
          />
        </div>
    )
}