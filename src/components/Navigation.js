import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="about" activeClassName="nav-active">
          A propos
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
