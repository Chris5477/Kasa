import React, { Component } from "react";
class BlocAbout extends Component {
  handleClick = (index) => {
    const allTextes = document.querySelectorAll(".txt-bloc");
    allTextes[index].classList.toggle("no-txt");
    const icons = document.querySelectorAll(".fa-chevron-up");
    icons[index].classList.toggle("addAnimation");
  };
  render() {
    let res = null;

    switch (this.props.children) {
      case "Fiabilité":
        res =
         "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        break;

      case "Respect":
        res =
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
        break;

      case "Service":
        res = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        break;

      case "Responsabilité":
        res =
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
        break;

      default:
        break;
    }

    return (
      <div className="bloc-about">
          <div className="head-bloc" onClick={() => this.handleClick(this.props.index)}>
            <p className="head-bloc-txt">
              {this.props.children} <span className="fas fa-chevron-up"></span>
            </p>
          </div>
          <p className="txt-bloc">{res}</p>
      </div>
    );
  }
}

export default BlocAbout;
