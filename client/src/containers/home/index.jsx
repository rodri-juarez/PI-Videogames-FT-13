import React, { useEffect, useState, useCallback } from "react";
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
import Search from '../../components/search/search'
import style from "./Home.module.css";
import Filtros from "../../components/filtros/Filtros";
import Pagination from "../../components/pagination/index";
import Ordenadores from "../../components/ordenadores/Ordenadores";
import ErrorBoundary from "../../components/errorBoundary";
import CircularIndeterminate from '../../components/MaterialUI/CircularIndeterminate';



export default function Home() {
  const videogames = useSelector((store) => store.videogames);
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const [render, setRender] = useState("videogames"); // Estado que maneja que es lo que se renderiza en el componente^


  useEffect(() => {

    if (videogames.length === 0) dispatch(getVideogames()); // Cuando se monta el componente, se pide al back los videogames
    if (genres.length === 0) {

      return dispatch(getGenres());
    }
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
  const busquedaPorNombre = useCallback((nombre) => {
    setBusqueda(nombre);
  }, []);

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

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Funcion encargada de paginacion

  const goToNextPage = () => setCurrentPage(currentPage + 1);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  //-----------------Ordenadores (estados, useEffect y funciones)--(componente Ordenadores)-----------------

  const [ordenAlfabetico, setOrdenAlfabetico] = useState(false); // Estados que manejan los if que ejecutan las actions ordenadoras
  const [ordenadores, setOrdenadores] = useState(false);
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

  const noOrder = useCallback(() => {
    dispatch(getVideogames());
    return setOrdenadores(false);
  }, [dispatch]);

  //------------ -------Filtros (estados, useEffect y funciones)-------------------------

  //------------------------------FILTRO POR CREATOR------------------------------------
  const gamesCreator = useSelector((store) => store.creator);
  const [filtros, setFiltros] = useState(false);
  const [creator, setCreator] = useState(false);

  const noFilter = useCallback(() => {
    setRender("videogames");
    return setFiltros(false);
  }, []);

  useEffect(() => {
    if (creator) {
      dispatch(ordenarPorCreator(creator));
      setCreator(false);
      return setRender("gamesCreator");
    }
  }, [dispatch, creator, render]);

  //------------------------------FILTRO POR GENEROS------------------------------------
  const filterByGenres = useSelector((store) => store.filterByGenres);
  const [byGenres, setByGenres] = useState(false);

  useEffect(() => {
    if (byGenres) {
      dispatch(ordenarPorGenres(byGenres));
      setByGenres(false);
      return setRender("gamesByGenres");
    }
  }, [dispatch, render, byGenres]);

  //-----------------------------------------------------------RETURN----------------------------------------------------------------------
  return (
    <>
      {/*  Section NavBar */}

      {/* <nav className={style.nav}>
        <ErrorBoundary>
          <Nav busquedaPorNombre={busquedaPorNombre} />
        </ErrorBoundary>
      </nav> */}

      {/*  Section de Ordenamiento */}

      {/*      <div className={style.divFiltros}>
        <ErrorBoundary>
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

          <h1 className={style.titulo}>Henry Videogames</h1>

          <IconContext.Provider
            value={{ style: { fontSize: "75px", color: "rgb(0, 0, 0)" } }}
          >
            <div
              style={{
                marginLeft: "20px",
              }}
            >
              <GiBattleMech />
            </div>
          </IconContext.Provider>
        </ErrorBoundary>
      </div> */}
      <div className={style.divFiltros}>
        {/* <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
        <Link className={style.Link} to="/Home">Home</Link>
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Videogame"
          inputProps={{ 'aria-label': 'search videogame' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <Link className={style.Link} to="/CreateVideogame">Create Videogame</Link>
        </IconButton>
      </Paper> */}
        <Search busquedaPorNombre={busquedaPorNombre} />
      </div>


      <div className={style.filtros}>
        <ErrorBoundary>
          {!ordenadores && (
            <button
              className={style.btnFilter}
              onClick={() => setOrdenadores(true)}
            >
              Order
            </button>
          )}
          {ordenadores && (
            <Ordenadores
              setOrdenAlfabetico={setOrdenAlfabetico}
              setDescendente={setDescendente}
              setRating={setRating}
              noOrder={noOrder}
            />
          )}
          {!filtros && (
            <button
              className={style.btnFilter}
              onClick={() => setFiltros(true)}
            >
              Filter
            </button>
          )}
          {filtros && (
            <Filtros
              setCreator={setCreator}
              setByGenres={setByGenres}
              genres={genres}
              noFilter={noFilter}
            />
          )}
        </ErrorBoundary>
      </div>

      {/*  Section de Videogames */}
      { !videogames.length > 0 ? (
      <h1 className={style.h1Pagination}><CircularIndeterminate /></h1>
      ) : (
        <section className={style.section}>
          <ErrorBoundary>

            <Videogames
              render={render}
              gameSearch={gameSearch}
              gamesCreator={gamesCreator}
              filterByGenres={filterByGenres}
              currentVideogames={currentVideogames}
            />
          </ErrorBoundary>
        </section>
      )
      }
      {/*  Section de Paginacion */}

      <nav>
        <ErrorBoundary>
          {videogames.length > 0 ? (
            <Pagination
              videogamesPerPage={videogamesPerPage}
              totalVideogames={videogames.length}
              paginate={paginate}
              goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
            />
          ) : null}
        </ErrorBoundary>
      </nav>

      <footer></footer>
    </>
  );
}
