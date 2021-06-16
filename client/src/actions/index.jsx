import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_VIDEOGAME_ID = "GET_VIDEOGAME_ID"
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
/* export const NEXT_PAGE = "NEXT_PAGE"; */
export const ORDENAR_ALFABETICAMENTE =  "ORDENAR_ALFABETICAMENTE";
export const ORDENAR_DESCENDENTEMENTE = "ORDENAR_DESCENDENTEMENTE";
export const ORDENAR_POR_RATING = "ORDENAR_POR_RATING";
export const CREATOR = "CREATOR";



export function getVideogames() {
  return async function (dispatch) {
    const response = await axios.get(
      'http://localhost:3001/videogames'
    );
    dispatch({ type: "GET_VIDEOGAMES", payload: response.data });
  };
}

export function getVideogame(videogame) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/videogames?search=${videogame}`
    );
    dispatch({ type: "GET_VIDEOGAME", payload: response.data });
  };
}  

export function getVideogameID(id) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/videogame/:${id}`
    );
    dispatch({ type: "GET_VIDEOGAME_ID", payload: response.data });
  };
}

export function addVideogame({ name, description, relesead, rating, plataforms, creator, genres }) {
  return async function (dispatch) {
     await axios.post(
      'http://localhost:3001/videogame', { name, description, relesead, rating, plataforms, creator, genres } 
    );
    dispatch({ type: "ADD_VIDEOGAME"})
}}

/* export function nextPage(page) {
  return async function (dispatch) {
    console.log('ejecucion de nextPage')
    console.log(page)
    const response = await axios.get(
      `http://localhost:3001/videogames?page=${page}`
    );
    dispatch({ type: "NEXT_PAGE", payload: response.data });
  };
} */
   
export function ordenarAlfabeticamente() {
  
  console.log('ejecucion de ordenarAlfabeticamente')

  return { type: "ORDENAR_ALFABETICAMENTE"};

}

export function ordenarDescendentemente() {
  
  console.log('ejecucion de ordenarDescendentemente')

  return { type: "ORDENAR_DESCENDENTEMENTE"};

}

export function ordenarPorRating() {
  
  console.log('ejecucion de ordenar por Rating')

  return { type: "ORDENAR_POR_RATING"};

}

export function ordenarPorCreator() {
  
  console.log('ejecucion de ordenar por CREADOR')

  return { type: "CREATOR"};

}