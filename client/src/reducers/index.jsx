import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME,
  GET_VIDEOGAME_ID,
  ADD_VIDEOGAME,
  GET_GENRES,
  /* NEXT_PAGE, */
  ORDENAR_ALFABETICAMENTE,
  ORDENAR_DESCENDENTEMENTE,
  ORDENAR_POR_RATING,
  CREATOR,
  GENRES
} from "../actions";

const initialState = {
  videogames: [],
  videogameSearch: [],
  videogame: [],
  genres: [],
  creator: [],
  filterByGenres: []
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
      case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
  
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
        filterByGenres: state.filterByGenres.sort(function (a, b) {
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
        creator: state.creator.reverse(),
        filterByGenres: state.filterByGenres.reverse(),
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
        filterByGenres: state.filterByGenres.sort(function (a, b) {
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
        let filterByCreator =[];
        if(action.payload === 'Rawg Games' || action.payload === '---') filterByCreator = state.videogames.filter((game) => !game.creator)
        if(action.payload === 'Usuario') filterByCreator = state.videogames.filter((game) => game.creator)
        return {
          ...state,
          creator: filterByCreator,
        };
        case GENRES:
          let genresGame = [];
          state.videogames.forEach((game) => {
          if(game.genres.find(genre => genre.name === action.payload)) return genresGame.push(game)
           })
           
        return {
          ...state,
          filterByGenres: genresGame,
        }
    default:
      return state;
  }
}

export default reducer;
