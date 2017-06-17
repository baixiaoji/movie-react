import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Main from './components/Main';
import SingleFilm from './components/SingleFilm';
// import router
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import "./index.css"




const routes = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={App}></IndexRoute>
            <Route path="film/:id" component={SingleFilm}></Route>
        </Route>
    </Router>
)


ReactDOM.render(routes, document.getElementById('root'));
