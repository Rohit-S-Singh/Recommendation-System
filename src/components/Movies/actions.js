export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";
export const SHOW_MOVIE = "SHOW_MOVIE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

import axios from 'axios';

export const addMovies = (movies) => {
  return {
    type: "ADD_MOVIES",
    movies: movies,
  };
};

export const addmovie = (movie) => {
  return async (dispatch) => {
    try {
      console.log("helloooo");

      const response = await axios.post(
        "http://localhost:8000/api/movie/add",
        movie
      );

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};

export const getMovies = () => {
  return async (dispatch) => {
    try {
      console.log("helloooo");

      const response = await axios.get(
        "http://localhost:8000/api/movie/get",
      );

      console.log(response);

      dispatch(addMovies(response.data.movies));





    } catch (e) {
      console.log(e);
    }
  };
};

// export function handleMovieSearch(movie) {
//   const url = `https://www.omdbapi.com/?apikey=8b46f1c2&t=${movie}`;

//   return function (dispatch) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         dispatch({ type: "ADD_SEARCH_RESULT", movie });
//       });
//   };
// }
