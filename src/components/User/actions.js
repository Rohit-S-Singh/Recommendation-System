export const ADD_RATING = "ADD_RATING";
export const ADD_RECOMMENDATIONS = "ADD_RECOMMENDATIONS";
export const USER_DATA = "USER_DATA";



export function addRating(movieRating){

   
    return{
        type:"ADD_RATING",
        payload:movieRating
    }
}



export function addRecommendations(data){
   
    return{
        type:"ADD_RECOMMENDATIONS",
        payload:data
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
export function setUser(user){
    return{
        type:"USER_DATA",
        payload:user,
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
export const SetRating = (user) => {
  return async (dispatch, getState) => {


    const givenRatings = user.givenRatings;
    const userId = user.id;
    
    // console.log("vrevrebeb",givenRatings);

}};

// export function handleMovieSearch(movie){

//     const url = `https://www.omdbapi.com/?apikey=8b46f1c2&t=${movie}`;

//     return function(dispatch){

//         fetch(url)       
//         .then(response => response.json())
//         .then(movie => { 
//             // dispatch({type : 'ADD_SEARCH_RESULT' , movie});

//         })
//     }
// }