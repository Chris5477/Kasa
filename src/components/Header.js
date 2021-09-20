import React, { Component } from "react";
import Navigation from "./Navigation";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo-header" src="img/LOGO.png" alt="logo du site" />
        <Navigation />
      </div>
    );
  }
}

export default Header;
