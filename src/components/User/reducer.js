import { ADD_RATING} from "./actions";
import {ADD_RECOMMENDATIONS} from "./actions";

var initialstate = {
    name:"",
    followers:[],
    givenRatings:{a:"4",b:"9"},
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
        
        case ADD_RECOMMENDATIONS:
        return{
            ...state ,Recommendations :[...state.Recommendations,action.payload]
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

      

        default:
        return state;
    }
}

