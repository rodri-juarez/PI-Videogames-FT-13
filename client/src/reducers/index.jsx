import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME,
  GET_VIDEOGAME_ID,
  ADD_VIDEOGAME,
  /* NEXT_PAGE, */
  ORDENAR_ALFABETICAMENTE,
  ORDENAR_DESCENDENTEMENTE,
  ORDENAR_POR_RATING,
  CREATOR,
} from "../actions";

const initialState = {
  videogames: [],
  videogameSearch: [],
  videogame: [],
  creator: [],
};



function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        creator: []
      };
    case GET_VIDEOGAME:
      return {
        ...state,
        videogameSearch: action.payload,
      };
      case GET_VIDEOGAME_ID:
        return {
          ...state,
          videogame: action.payload,
        };

    case ADD_VIDEOGAME:
      return {
        ...state,
      };
    /* case NEXT_PAGE:
      return {
        ...state,
        videogames: action.payload,
      }; */
    case ORDENAR_ALFABETICAMENTE:
      return {
        ...state,
        videogames: state.videogames.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
        videogameSearch: state.videogameSearch.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
        creator: state.creator.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
      };
    case ORDENAR_DESCENDENTEMENTE:
      return {
        ...state,
        videogames: state.videogames.reverse(),
        videogameSearch: state.videogameSearch.reverse(),
        creator: state.creator.reverse()
      };
    case ORDENAR_POR_RATING:
      return {
        ...state,
        videogames: state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        }),
        videogameSearch: state.videogameSearch.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        }),
        creator: state.creator.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        }),
      };
      case CREATOR:
        let filtrado = state.videogames.filter((game) => game.creator)
        return {
          ...state,
          creator: filtrado,
        }
    default:
      return state;
  }
}

export default reducer;
