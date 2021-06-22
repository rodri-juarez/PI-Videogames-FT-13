import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_VIDEOGAME_ID = "GET_VIDEOGAME_ID"
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";

export const ORDENAR_ALFABETICAMENTE =  "ORDENAR_ALFABETICAMENTE";
export const ORDENAR_DESCENDENTEMENTE = "ORDENAR_DESCENDENTEMENTE";
export const ORDENAR_POR_RATING = "ORDENAR_POR_RATING";
export const CREATOR = "CREATOR";
export const GENRES = "GENRES";


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

export function addVideogame({ name, description, released, rating, plataforms, creator, background_image, genres }) {
  return async function (dispatch) {
     await axios.post(
      'http://localhost:3001/videogame', { name, description, released, rating, plataforms, background_image, creator, genres } 
    );
    dispatch({ type: "ADD_VIDEOGAME"})
}}

export function getGenres() {
  return async function (dispatch) {
    console.log('adentro de pedido por genres')
    const response = await axios.get(
      `http://localhost:3001/genres`
    );
    dispatch({ type: "GET_GENRES", payload: response.data });
  };
}

   
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

export function ordenarPorGenres(genre) {
  console.log(genre)
  console.log('ejecucion de ordenar por GENRES')

  return { type: "GENRES", payload: genre};

}