import React, { Component } from "react";
import Navigation from "./Navigation";

import "../styles/header.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo-header" src="img/logo-header.png" alt="logo du site" />
        <Navigation />
      </div>
    );
  }
}

export default Header;
