import { FETCH_FILM } from "../actions/fetchFilm.js"

export default function (state = [], action) {
    switch(action.type){
        case FETCH_FILM:
            return [action.payload,...state];
        default:
            return state;
    }
}