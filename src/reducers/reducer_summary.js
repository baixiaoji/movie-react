import { FETCH_SUMMARY } from "../actions/fetchFilm.js"

export default function (state = [], action) {
    const { caption } = action;
    
    
    
    switch (action.type) {
        case FETCH_SUMMARY:
            return [...state,action.payload];
        default:
            return state;
    }
}