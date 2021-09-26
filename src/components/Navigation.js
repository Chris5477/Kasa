import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/navigation.css";

const accueil = window.screen.width > 798 ? "Accueil" : "ACCUEIL";
const about = window.screen.width > 798 ? "A propos" : "A PROPOS";
class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">
          {accueil}
        </NavLink>
        <NavLink exact to="about" activeClassName="nav-active">
          {about}
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
