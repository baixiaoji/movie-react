import { applyMiddleware, createStore } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import { browserHistory } from "react-router"

import logger from 'redux-logger'
import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"
import rootRudcer from "./reducers/index"



const defaultStore = {
    film: [],
    summary:[]
}

const store = createStore(rootRudcer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger,thunk));

export const history = syncHistoryWithStore(browserHistory, store)

export default store;