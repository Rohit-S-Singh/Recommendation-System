import { ADD_MOVIE_TO_LIST , ADD_SEARCH_RESULT , ADD_FAVOURITES, ADD_MOVIES, REMOVE_FAVOURITES ,SHOW_FAVOURITE , SHOW_MOVIE} from "../actions/action";

var initialstate = {
    movies:[],
    favourites:[],
    showfavourite:false
}

export function a (state = initialstate , action){

    switch(action.type){
        
        case ADD_MOVIES:
            return {...state , movies: action.movies};   

        case ADD_FAVOURITES:
            return {...state , favourites: [ ...state.favourites  ,   action.movie]};
        
        case REMOVE_FAVOURITES:
            let new_Favorites = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {...state , favourites : new_Favorites};
       
       case SHOW_FAVOURITE:
            return {...state , showfavourite:true};
        
        case SHOW_MOVIE:
            return {...state , showfavourite:false};
        
        case ADD_MOVIE_TO_LIST:
        return{
            ...state , movies:[action.movie , ...state.movies]
        }

        default:
            return state;
    }
} 

var initialSearchState = {

    result :{},
    showSearchResults : false
};

export function searchReducer(state = initialSearchState , action){
    
    switch(action.type){

        case ADD_SEARCH_RESULT:
            return{
            ...state,
            result : action.movie,
            showSearchResults:true
        };
        case ADD_MOVIE_TO_LIST:
            return{
            ...state , 
            showSearchResults:false
        }

        default:
        return state;
    }
}

var initialMovieState = {

    movies:initialstate,
    search:initialSearchState
}

export default function RootReducer(state = initialMovieState , action){
    return{
        search: searchReducer(state.search, action),
        movies:a(state.movies, action)
    } 
}
