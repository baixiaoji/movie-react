import { applyMiddleware, createStore } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import { browserHistory } from "react-router"
import logger from 'redux-logger'

import rootRudcer from "./reducers/index"



const defaultStore = {
    film: [],
    app: ["nih"]
}

const store = createStore(rootRudcer, applyMiddleware(logger));

export const history = syncHistoryWithStore(browserHistory, store)

export default store;