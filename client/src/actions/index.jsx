import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const NEXT_PAGE = "NEXT_PAGE";
export const ORDENAR_ALFABETICAMENTE =  "ORDENAR_ALFABETICAMENTE";

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

export function addVideogame({ name, description, relesead, rating, plataforms, genres }) {
  return async function (dispatch) {
     await axios.post(
      'http://localhost:3001/videogame', { name, description, relesead, rating, plataforms, genres } 
    );
    dispatch({ type: "ADD_VIDEOGAME"})
}}

export function nextPage(page) {
  return async function (dispatch) {
    console.log('ejecucion de nextPage')
    console.log(page)
    const response = await axios.get(
      `http://localhost:3001/videogames?page=${page}`
    );
    dispatch({ type: "NEXT_PAGE", payload: response.data });
  };
}
   
export function ordenarAlfabeticamente() {
  console.log('ejecucion de ordenarAlfabeticamente')

  return { type: "ORDENAR_ALFABETICAMENTE"};

}