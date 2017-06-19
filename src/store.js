import { applyMiddleware, createStore } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import { browserHistory } from "react-router"

import logger from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import rootRudcer from "./reducers/index"



const defaultStore = {
    film: [],
    app: ["nih"]
}

const store = createStore(rootRudcer, applyMiddleware(logger,thunk,promise));

export const history = syncHistoryWithStore(browserHistory, store)

export default store;