import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Main from './components/Main';
import SingleFilm from './components/SingleFilm';

import { Provider } from "react-redux"
import store, { history } from "./store"
// import router
import { Router, Route, IndexRoute } from "react-router"

import { OnFilmEnter } from "./routes/route_callback"
import "./index.css"




const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" onEnter={OnFilmEnter}>
                <IndexRoute component={App}></IndexRoute>
                <Route path="film/:id" component={SingleFilm}></Route>
            </Route>
        </Router>
    </Provider>
)


ReactDOM.render(routes, document.getElementById('root'));
