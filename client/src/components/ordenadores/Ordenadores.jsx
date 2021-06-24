import React from 'react';
import style from './ordenadores.module.css';

function Ordenadores ({setOrdenAlfabeticoChange, setDescendenteChange, setRatingChange, noOrder}) {
    

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
            setOrdenAlfabeticoChange();
          }}
        >
          Alfabetic
        </button>

        <button className={style.btn}
          onClick={() => {
            setDescendenteChange();
          }}
        >
          Asc / Desc
        </button>

        <button className={style.btn}
          onClick={() => {
            setRatingChange();
          }}
        >
          Rating
        </button>
        
      </div>
    )
}

export default React.memo(Ordenadores)