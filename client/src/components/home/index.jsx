import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  ordenarAlfabeticamente,
  ordenarDescendentemente,
  ordenarPorRating,
  ordenarPorCreator,
  getVideogame,
} from "../../actions";
import Card from "../cards/Card";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Search from "../search/index";
import Pagination from "../pagination/index";

export default function Home() {
  const gameSearch = useSelector((store) => store.videogameSearch);
  const videogames = useSelector((store) => store.videogames);
  let gamesCreator = useSelector((store) => store.creator);

  const dispatch = useDispatch();
  const [ordenAlfabetico, setOrdenAlfabetico] = useState(false); // Estados que manejan los if que ejecutan las actions ordenadoras
  const [descendente, setDescendente] = useState(false);
  const [rating, setRating] = useState(false);
  const [creator, setCreator] = useState(false);

  const [render, setRender] = useState("videogames"); // Estado que maneja que es lo que se renderiza en el componente

  useEffect(() => {
    if (videogames.length === 0) dispatch(getVideogames()); // Cuando se monta el componente, se pide al back los videogames
  }, [dispatch, videogames]);

  useEffect(() => {
    if (ordenAlfabetico) {
      dispatch(ordenarAlfabeticamente());
      return setOrdenAlfabetico(false);
    }
  }, [dispatch, ordenAlfabetico]);

  useEffect(() => {
    // useEffect que maneja los dispatch para ordenar los componentes renderizados
    if (descendente) {
      dispatch(ordenarDescendentemente());
      return setDescendente(false);
    }

    if (rating) {
      dispatch(ordenarPorRating());
      return setRating(false);
    }
    console.log('en useEffect de Home')
    if (creator && gamesCreator !== "gamesCreator") {
      dispatch(ordenarPorCreator());
      setCreator(false);
      return setRender("gamesCreator");
    }
  }, [dispatch, ordenAlfabetico, descendente, rating, creator, gamesCreator]);

  const [busqueda, setBusqueda] = useState(false);
  useEffect(() => {
    // useEffect que maneja la busqueda de videogames (con el componente Search)
    if (busqueda) {
      dispatch(getVideogame(busqueda));
      setBusqueda(false);
      return setRender("gameSearch");
    }
  }, [dispatch, busqueda]);

  function busquedaPorNombre(nombre) {
    setBusqueda(nombre);
  }
  console.log(videogames);
  console.log(gamesCreator);

  function filtroPorCreador() {
    setCreator(true);
  }

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
          <Search onGameSearchChange={busquedaPorNombre} />
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

        <button
          onClick={() => {
            filtroPorCreador();
          }}
        >
          por creador
        </button>
      </div>


        {/* <div>
          <label className={style.prueba} htmlFor="genres">
            Genres
          </label>
          <select name="select" id="genres" defaultValue="value1" onClick={()=>{setCreator(true)}}>
            <option value="value1">---</option>
            <option value="value2">
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>
        </div> */}
      </div>

      
      {/*  Section de Videogames */}

      <section>
        {render === "videogames" &&
          videogames.map((videogame) => {
            return (
              <div key={videogame.id}>
                <Card videogame={videogame} />
              </div>
            );
          })}
        {render === "gamesCreator" &&
          gamesCreator.map((videogame) => {
            return (
              <div key={videogame.id}>
                <Card videogame={videogame} />
              </div>
            );
          })}

        {render === "gameSearch" &&
          gameSearch.map((videogame) => {
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
