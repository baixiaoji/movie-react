import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import router
import {Router,Route, IndexRoute,browserHistory} from "react-router"

import "./index.css"

const routes = (
    <Router history={browserHistory}>

    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
