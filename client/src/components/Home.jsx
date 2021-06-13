import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../actions";
import Card from "../components/cards/Card";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import Pagination from "./Pagination";

export default function Home() {
  const videogames = useSelector((store) => store.videogames);
  const dispatch = useDispatch();
  

  

  useEffect(() => {
    if (!videogames) dispatch(getVideogames());
  }, [dispatch, videogames]);

  console.log(videogames);



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
            <option value="value2">
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        
          <div>
            <label className={style.prueba} htmlFor="ordenar">
              Genres
            </label>
            <select name="select" id='ordenar' defaultValue="Value1">
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
            <select name="select" id='alfabetico' defaultValue="Value1">
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
            </select>
          </div>
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
