export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";
export const SHOW_MOVIE = "SHOW_MOVIE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";


export function addMovies(movies){
    return{
        type:"ADD_MOVIES",
        movies : movies
    }
}

export function addfavourite(movie){
    return{
        type: "ADD_FAVOURITES",
        movie
    }
}


export function removefavourite(movie){
    return{
        type: "REMOVE_FAVOURITES",
        movie
    }
}

export function search(movie){
    return{
        type:"SEARCH_MOVIE",
        movie
    }
}

export function showfav(){
    return{
        type:"SHOW_FAVOURITE"
    }
}

export function showmov(){
    return{
        type:"SHOW_MOVIE"
    }
}

export function addToMoviesList(movie){
    return{
        type:"ADD_MOVIE_TO_LIST",
        movie
    }
}

export function handleMovieSearch(movie){

    const url = `https://www.omdbapi.com/?apikey=8b46f1c2&t=${movie}`;

    return function(dispatch){

        fetch(url)       
        .then(response => response.json())
        .then(movie => { 
            dispatch({type : 'ADD_SEARCH_RESULT' , movie});

        })
    }
}