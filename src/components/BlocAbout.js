import React, { Component } from "react";

class BlocAbout extends Component {
  render() {
    let res = null;

    switch (this.props.children) {
      case "Fiabilité":
        res =
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius animi tempore officia laudantium commodi amet cupiditate eveniet provident! Quibusdam alias aut laborum quam recusandae temporibus?";
        break;

      case "Respect":
        res =
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius animi tempore officia laudantium commodi amet cupiditate eveniet provident! Quibusdam alias aut laborum quam recusandae temporibus?";
        break;

      case "Service":
        res =
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
        break;

      case "Responsabilité":
        res =
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius animi tempore officia laudantium commodi amet cupiditate eveniet provident! Quibusdam alias aut laborum quam recusandae temporibus?";
        break;

      default:
        break;
    }

    return (
      <div className="bloc-about">
        <div className="bloc">
          <div className="head-bloc">
            <p>{this.props.children}</p>
            <span className="fas fa-chevron-up"></span>
          </div>
          <p className="txt-bloc">{res}</p>
        </div>
      </div>
    );
  }
}

export default BlocAbout;
