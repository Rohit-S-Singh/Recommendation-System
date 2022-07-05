import { ADD_RATING} from "./actions";

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