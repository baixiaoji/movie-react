import { FETCH_FILM,FETCH_SUMARY } from "../actions/fetchFilm.js"

export default function (state = [], action) {
    switch(action.type){
        case FETCH_FILM:
            return [...action.payload,...state];
        case FETCH_SUMARY:
            return [...action.summary,...state];
        default:
            return state;
    }
}