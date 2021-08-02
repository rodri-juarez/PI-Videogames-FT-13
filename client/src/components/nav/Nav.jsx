import React from 'react';
import Search from '../search'
import style from './navBar.module.css'
import { Link } from 'react-router-dom';



function Nav({busquedaPorNombre}) {
  return (
    <nav className={style.h1}>
          
        {/*  Section de Busqueda */}

        <div className={style.div}>
          <Search busquedaPorNombre={busquedaPorNombre} />
        </div>

        {/*  Section NavBar - Create Videogame */}
        <div className={style.link2}>
          <button className={style.btn}>
            <Link className={style.Link} to="/CreateVideogame">CREATE VIDEOGAME</Link>
          </button>
        </div>

      
    </nav>
  );
};

export default React.memo(Nav)
