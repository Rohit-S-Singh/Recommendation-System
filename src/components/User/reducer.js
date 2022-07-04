import { ADD_RATING} from "./actions";

var initialstate = {
    name:"",
    followers:[],
    givenRatings:{},
    Recommendations:[]
}

export const UserReducer = (state = initialstate , action)=>{

    switch(action.type){
        case ADD_RATING:
            var a = action.payload;
            Object.keys(a).map( (k)=>{
                state.givenRatings[k] = action.payload[k];
            } )
            console.log("State",state.givenRatings);
            return {...state};   

    //     case ADD_FAVOURITES:
    //         return {...state , favourites: [ ...state.favourites  ,   action.movie]};
        
    //     case REMOVE_FAVOURITES:
    //         let new_Favorites = state.favourites.filter(
    //             movie => movie.Title !== action.movie.Title
    //         )
    //         return {...state , favourites : new_Favorites};
       
    //    case SHOW_FAVOURITE:
    //         return {...state , showfavourite:true};
        
    //     case SHOW_MOVIE:
    //         return {...state , showfavourite:false};
        
    //     case ADD_MOVIE_TO_LIST:
    //     return{
    //         ...state , movies:[action.movie , ...state.movies]
    //     }

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

      

        default:
        return state;
    }
}

