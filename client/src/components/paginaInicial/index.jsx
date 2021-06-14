import React from "react";
import { Link } from "react-router-dom";
import style from "./paginaPrincipal.module.css";
export default function Page() {
  return (
    <div className={style.div}>
      <div>
        <div className={style.button}>
          <button className={style.link}>
            <Link to="/Home">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
