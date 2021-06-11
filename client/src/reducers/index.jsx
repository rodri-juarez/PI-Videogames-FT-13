import { GET_VIDEOGAMES } from "../actions";

const initialState = {
  videogames: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        videogames: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
