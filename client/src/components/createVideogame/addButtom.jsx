import style from './createVideogame.module.css'

export default function AddButtom ({setNewPlatform, setNewGenre, newGenre, newPlatform}){

    return(
        <div className={style.border1}>
            <button
              className={style.btn}
              onClick={() => setNewGenre([...newGenre, "x"])}
            >
              Add Genre
            </button>
            <button
              className={style.btn}
              onClick={() => setNewPlatform([...newPlatform, "x"])}
            >
              Add Platform
            </button>
          </div>
    )
}