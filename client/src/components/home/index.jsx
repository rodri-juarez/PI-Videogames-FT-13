import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, ordenarAlfabeticamente } from "../../actions";
import Card from "../cards/Card";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Search from "../search/index";
import Pagination from "../pagination/index";

export default function Home() {
  const videogames = useSelector((store) => store.videogames);
  const dispatch = useDispatch();
  const [ordenAlfabetico, setOrdenAlfabetico] = useState(false);

  useEffect(() => {
    if (videogames.length === 0) dispatch(getVideogames());
    if (ordenAlfabetico) dispatch(ordenarAlfabeticamente());
  }, [dispatch, videogames, ordenAlfabetico]);

  /*  const orden = function ordenar(){
    console.log(videogames)
    videogames.sort(function (a, b) {
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
      return 0;})
    console.log('entro a funcion ordenadora')
    console.log(videogames)
    return setOrdenado(true)

  }
 */
  return (
    <>
      {/*  Section NavBar */}

      <nav className={style.h1}>
        {/*  Section NavBar - Home */}
        <div className={style.link}>
          <button>
            <Link to="/Home">Home</Link>
          </button>
        </div>

        {/*  Section de Busqueda */}

        <div>
          <Search />
        </div>

        {/*  Section NavBar - Create Videogame */}
        <div className={style.link2}>
          <button>
            <Link to="/CreateVideogame">Create Videogame</Link>
          </button>
        </div>
      </nav>

      {/*  Section de Ordenamiento */}

      <div className={style.divFiltros}>
        <div className={style.prueba1}>
          <h3>Ordenar por: </h3>
        </div>
        <div>
          <label className={style.prueba} htmlFor="creador">
            Creator
          </label>
          <select name="creador" defaultValue="Value1">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        <div>
          <label className={style.prueba} htmlFor="ordenar">
            Asc/Des
          </label>
          <select name="select" defaultValue="Value1">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        <div>
          <label className={style.prueba} htmlFor="ordenar">
            Genres
          </label>
          <select name="select" id="ordenar" defaultValue="Value1">
            <option value="value1">Value 1</option>
            <option value="value2" selected>
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>

      <div className={style.prueba}>
        <div>
          <label className={style.prueba} htmlFor="alfabetico">
            Alfabetico
          </label>
          <select name="select" id="alfabetico" defaultValue="Value1">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        <button
          onClick={() => {
            setOrdenAlfabetico(true);
          }}
        >
          ordenar alf
        </button>
      </div>

      {/*  Section de Videogames */}

      <section>
        {videogames.map((videogame) => {
          return (
            <div key={videogame.id}>
              <Card videogame={videogame} />
            </div>
          );
        })}
      </section>

      {/*  Section de Paginacion */}

      <Pagination />
    </>
  );
}
