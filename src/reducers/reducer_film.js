import { FETCH_FILM} from "../actions/fetchFilm.js"

export default function (state = [], action) {
    const {caption} = action
    switch(action.type){
        case FETCH_FILM:
            return [...state,...action.payload];
        default:
            return state;
    }
}