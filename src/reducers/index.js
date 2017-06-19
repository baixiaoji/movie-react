import {combineReducers } from "redux"
import  {routerReducer} from "react-router-redux"

import WeatherReducer from "./reducer_film"

const rootRudcer = combineReducers({
    film: WeatherReducer,
    routing: routerReducer
})

export default rootRudcer;