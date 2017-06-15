import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-center">
            <a className="nav-item">
              {/*<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />*/}
              我的电影院
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
