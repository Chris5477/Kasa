import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import "../styles/error.css";

class Error extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="error">
          <h1 className="code-error">404</h1>
          <p className="txt-error">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="back-home">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </>
    );
  }
}

export default Error;
