import style from './createVideogame.module.css'

export default function Released ({setNewVideogame, newVideogame}){

    return(
        <div className={style.border}>
          <label className={style.label} for="Released">
            Released:{" "}
          </label>
          <input
            className={style.input}
            type="date"
            name="Released"
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, released: e.target.value })
            }
            required
          />
        </div>
    )
}