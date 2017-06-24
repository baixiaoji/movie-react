import {combineReducers } from "redux"
import  {routerReducer} from "react-router-redux"

import reducerAllFilm from "./reducer_film"
import summary from "./reducer_summary"

const rootRudcer = combineReducers({
    film: reducerAllFilm,
    summary:summary,
    routing: routerReducer
})

export default rootRudcer;