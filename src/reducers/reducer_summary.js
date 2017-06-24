import { FETCH_SUMARY } from "../actions/fetchFilm.js"

export default function (state = [], action) {
    switch(action.type){
        case FETCH_SUMARY:
            return [...action.summary,...state];
        default:
            return state;
    }
}