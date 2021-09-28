import React, { Component } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

import "../styles/header.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><img className="logo-header" src="../img/logo-header.png" alt="logo du site" /></Link>
        <Navigation />
      </div>
    );
  }
}

export default Header;
