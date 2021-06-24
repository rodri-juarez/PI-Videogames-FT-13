import React from 'react';
import style from "./notFound.module.css";
import { IconContext } from "react-icons";
import { FaRegGrinBeamSweat } from "react-icons/fa";

function NotFound() {
  return (
    <div className={style.div}>
      <h1 className={style.h1}>
        UPS! La pagina que buscas no existe...{" "}
        <IconContext.Provider
          value={{ style: { marginLeft:'15px' , fontSize: "50px", color: "rgb(255, 168, 86)" } }}
        >
          <FaRegGrinBeamSweat />
        </IconContext.Provider>
      </h1>
      <div className={style.prueba}><button
        className={style.btn}
        onClick={() => {
          window.history.back();
        }}
      >
        {/* <Link to="/Home">Home</Link> */}
        REGRESAR
      </button>
      </div>
    </div>
  );
}

export default React.memo(NotFound)