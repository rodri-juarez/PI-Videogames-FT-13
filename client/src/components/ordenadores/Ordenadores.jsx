import style from './ordenadores.module.css'

export default function Ordenadores ({setOrdenAlfabetico, setDescendente, setRating}) {


    return (
        <div className={style.prueba}>
        <button
          onClick={() => {
            setOrdenAlfabetico(true);
          }}
        >
          ordenar alf
        </button>

        <button
          onClick={() => {
            setDescendente(true);
          }}
        >
          ordenar descendentemente
        </button>

        <button
          onClick={() => {
            setRating(true);
          }}
        >
          ordenar por rating
        </button>

        
      </div>
    )
}