import {ADD_MOVIE,ADD_FAVOURITE} from "../action"
const initialMovieState={
    list:[],
    favourites:[]
}
export function movie(state=initialMovieState,action){

    // if(action.type==ADD_MOVIE){
    //     return {
    //         ...state,
    //         list: action.movie
    //     }
    // }

    // return state

    switch(action.type){
        case ADD_MOVIE:
            return{
                ...state,
          list: action.movie
            }

            case ADD_FAVOURITE:
                console.log("check",action)
                return{
                    ...state,
              favourites:[action.movie,...state.favourites]
                }
    
                default:
                    return state
    }

   
}