import { applyMiddleware, createStore ,compose} from "redux"
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
let store 
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ ||  window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        rootRudcer,
        applyMiddleware(logger,thunk)
    )
}else{
    store = createStore(
        rootRudcer,
        compose(applyMiddleware(logger,thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
}
// const store = createStore(rootRudcer,
//                         //    compose( 
//                                applyMiddleware(logger,thunk),
//                             //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//                             // )
//                          )

export const history = syncHistoryWithStore(browserHistory, store)

export default store;