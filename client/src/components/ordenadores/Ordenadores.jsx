import React from 'react';
import style from './ordenadores.module.css';

function Ordenadores ({setOrdenAlfabetico, setDescendente, setRating, noOrder}) {
    

    return (
        <div className={style.prueba}>
          <label className={style.label}>Order by:</label>
          <button className={style.btn}
          onClick={() => {
            noOrder();
          }}
        >
          Non Order
        </button>

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

export default React.memo(Ordenadores)