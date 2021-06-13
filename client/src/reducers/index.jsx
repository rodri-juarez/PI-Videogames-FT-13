import { GET_VIDEOGAMES, GET_VIDEOGAME, ADD_VIDEOGAME, NEXT_PAGE} from "../actions";

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

    default:
      return state;
  }
}

export default reducer;
