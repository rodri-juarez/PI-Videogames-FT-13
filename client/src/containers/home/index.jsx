import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  ordenarAlfabeticamente,
  ordenarDescendentemente,
  ordenarPorRating,
  ordenarPorCreator,
  getVideogame,
  getGenres,
  ordenarPorGenres,
} from "../../actions";
import Videogames from "../../components/videogames/Videogames";
import style from "./Home.module.css";
import Nav from "../../components/nav/Nav";
import Filtros from "../../components/filtros/Filtros";
import Pagination from "../../components/pagination/index";
import Ordenadores from "../../components/ordenadores/Ordenadores";
import { GiBattleMech } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function Home() {
  const videogames = useSelector((store) => store.videogames);
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const [render, setRender] = useState("videogames"); // Estado que maneja que es lo que se renderiza en el componente

  useEffect(() => {
    console.log("entro a getVideogames");
    if (videogames.length === 0) dispatch(getVideogames()); // Cuando se monta el componente, se pide al back los videogames
    if (genres.length === 0) dispatch(getGenres());
  }, [dispatch, genres, videogames]);

  //----------------------------------Busqueda por nombre (componente Search)---------------------------------
  const gameSearch = useSelector((store) => store.videogameSearch);
  const [busqueda, setBusqueda] = useState(false);

  useEffect(() => {
    if (busqueda) {
      dispatch(getVideogame(busqueda));
      setBusqueda(false);
      return setRender("gameSearch");
    }
  }, [dispatch, busqueda]);

  // funcion que setea estado que activa busqueda por nombre
  function busquedaPorNombre(nombre) {
    setBusqueda(nombre);
  }

  //--------------------------------Paginacion------------------------
  // Estados usados para paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  // Variables usadas para paginacion
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Funcion encargada de paginacion

  //-----------------Ordenadores (estados, useEffect y funciones)--(componente Ordenadores)-----------------

  const [ordenAlfabetico, setOrdenAlfabetico] = useState(false); // Estados que manejan los if que ejecutan las actions ordenadoras
  const [descendente, setDescendente] = useState(false);
  const [rating, setRating] = useState(false);

  useEffect(() => {
    // useEffect que maneja los dispatch para ordenar los componentes renderizados
    if (ordenAlfabetico) {
      dispatch(ordenarAlfabeticamente());
      return setOrdenAlfabetico(false);
    }

    if (descendente) {
      dispatch(ordenarDescendentemente());
      return setDescendente(false);
    }

    if (rating) {
      dispatch(ordenarPorRating());
      return setRating(false);
    }
  }, [dispatch, ordenAlfabetico, descendente, rating]);

  //------------ -------Filtros (estados, useEffect y funciones)-------------------------

  //------------------------------FILTRO POR CREATOR------------------------------------
  const gamesCreator = useSelector((store) => store.creator);
  const [creator, setCreator] = useState(false);

  useEffect(() => {
    if (creator && render !== "gamesCreator") {
      dispatch(ordenarPorCreator());
      setCreator(false);
      return setRender("gamesCreator");
    }
  }, [dispatch, creator, render]);

  function filtroPorCreador() {
    setCreator(true);
  }

  //------------------------------FILTRO POR GENEROS------------------------------------
  const filterByGenres = useSelector((store) => store.filterByGenres);
  const [byGenres, setByGenres] = useState(false);

  useEffect(() => {
    if (byGenres && render !== "gamesByGenres") {
      dispatch(ordenarPorGenres(byGenres));
      setByGenres(false);
      console.log("seteando por genres");
      return setRender("gamesByGenres");
    }
  }, [dispatch, render, byGenres]);

  //-----------------------------------------------------------RETURN----------------------------------------------------------------------
  return (
    <>
      {/*  Section NavBar */}

      <nav className={style.nav}>
        <Nav busquedaPorNombre={busquedaPorNombre} />
      </nav>

      {/*  Section de Ordenamiento */}

      <div className={style.divFiltros}>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "75px",
              color: "rgb(0, 0, 0)",
              marginTop: "15px",
            },
          }}
        >
          <div
            style={{
              marginRight: "30px",
            }}
          >
            <GiBattleMech />
          </div>
        </IconContext.Provider>

        <h1 className={style.titulo}>Henry Games</h1>

        <IconContext.Provider
          value={{ style: { fontSize: "75px", color: "rgb(0, 0, 0)" } }}
        >
          <div
            style={{
              marginLeft: "30px",
            }}
          >
            <GiBattleMech />
          </div>
        </IconContext.Provider>
      </div>

      <div className={style.filtros}>
        <Ordenadores
          setOrdenAlfabetico={setOrdenAlfabetico}
          setDescendente={setDescendente}
          setRating={setRating}
        />
        <Filtros
          filtroPorCreador={filtroPorCreador}
          setByGenres={setByGenres}
          genres={genres}
        />
      </div>

      {/*  Section de Videogames */}

      <section className={style.section}>
        <Videogames
          render={render}
          gameSearch={gameSearch}
          gamesCreator={gamesCreator}
          filterByGenres={filterByGenres}
          currentVideogames={currentVideogames}
        />
      </section>

      {/*  Section de Paginacion */}

      <nav>
        <Pagination
          videogamesPerPage={videogamesPerPage}
          totalVideogames={videogames.length}
          paginate={paginate}
        />
      </nav>

      <footer></footer>
    </>
  )
}
