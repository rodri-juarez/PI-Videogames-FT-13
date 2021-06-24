import style from './createVideogame.module.css'

export default function Plataforms ({setNewVideogame, newVideogame}){
    
    return(
        <div className={style.border}>
          <label className={style.label} for="Plataforms">
            Plataforms:{" "}
          </label>
          <select
            className={style.select}
            name="plataforms"
            onChange={(e) =>
              setNewVideogame({
                ...newVideogame,
                plataforms: [...newVideogame.plataforms, e.target.value],
              })
            }
            required
          >
            <option defaultValue="" selected>
              Select a Platform
            </option>
            <option>Playstation 5</option>
            <option>Xbox-One</option>
            <option>Playstation 4</option>
            <option>Xbox-360</option>
            <option>PC</option>
            <option>MacOs</option>
            <option>Android</option>
            <option>Linux</option>
          </select>
        </div>
    )
}