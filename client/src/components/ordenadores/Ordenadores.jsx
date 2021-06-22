import style from './ordenadores.module.css'

export default function Ordenadores ({setOrdenAlfabetico, setDescendente, setRating}) {


    return (
        <div className={style.prueba}>
          <label className={style.label}>Order by:</label>
        <button className={style.btn}
          onClick={() => {
            setOrdenAlfabetico(true);
          }}
        >
          Alfabetic
        </button>

        <button className={style.btn}
          onClick={() => {
            setDescendente(true);
          }}
        >
          Asc / Desc
        </button>

        <button className={style.btn}
          onClick={() => {
            setRating(true);
          }}
        >
          Rating
        </button>

        
      </div>
    )
}