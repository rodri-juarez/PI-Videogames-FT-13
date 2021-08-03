import { Link } from "react-router-dom";
import style from "./paginaInicial.module.css";
export default function PaginaInicial() {
  return (<>
  <div className={style.divH1}>
    <h1 className={style.h1}>Welcome to Henry Videogames!</h1>
    </div>
      <Link className={style.link} to="/Home">
        <button className={style.btn}> HOME</button>
      </Link>
    <div className={style.div}>
      <div className={style.button}>


      </div>
    </div>
  </>
  );
}
