import { Link } from "react-router-dom";
import style from "./paginaInicial.module.css";
export default function PaginaInicial() {
  return (
    <div className={style.div}>
      <div className={style.button}>
        <h1 className={style.h1}>Welcome to Henry Games!</h1>

        <Link className={style.link} to="/Home">
          <button className={style.btn}> HOME</button>
        </Link>
      </div>
    </div>
  );
}
