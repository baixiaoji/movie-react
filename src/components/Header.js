import React, { Component } from 'react';
import { Link } from "react-router"

class Header extends Component {
  render() {
    return (

      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-center">
            <Link className="nav-item" to="/"> 我的电影院</Link>
            {/*<a className="nav-item">*/}
              {/*<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />*/}
              {/*电影院热卖*/}
            {/*</a>*/}
          </div>
        </div>
      </nav>

    );
  }
}

export default Header;
