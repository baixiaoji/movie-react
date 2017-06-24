import { FETCH_SUMMARY } from "../actions/fetchFilm.js"

export default function (state = [], action) {
    const { caption } = action;
    
    
    
    switch (action.type) {
        case FETCH_SUMMARY:
            const newState = Object.assign({},state)
            newState[caption] = action.payload
            return newState
            // return [...state,[caption]:action.payload];
        default:
            return state;
    }
}