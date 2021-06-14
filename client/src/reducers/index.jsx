import { GET_VIDEOGAMES, GET_VIDEOGAME, ADD_VIDEOGAME, NEXT_PAGE, ORDENAR_ALFABETICAMENTE} from "../actions";

const initialState = {
  videogames: [],
  videogame: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
      case GET_VIDEOGAME:
        return {
          ...state,
          videogame: action.payload,
        };
        case ADD_VIDEOGAME:
      return {
        ...state,
      };
      case NEXT_PAGE:
      return {
        ...state,
        videogames: action.payload,
      };
      case ORDENAR_ALFABETICAMENTE:
      return {
        ...state,
        videogames: state.videogames.sort(function (a, b) {
        
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
      return 0;}),
      };

    default:
      return state;
  }
}

export default reducer;
