import {
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
  ADD_FAVOURITES,
  ADD_MOVIES,
  REMOVE_FAVOURITES,
  SHOW_FAVOURITE,
  SHOW_MOVIE,
} from "./actions";

var initialstate = {
  movies: [],
  movie: {
    name: "",
    rating: "",
    description: "",
    releaseDate: "",
  },
};

const MovieReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, movies: action.movies };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        movies: [action.movie, ...state.movies],
      };

    default:
      return state;
  }
};

export default MovieReducer;
