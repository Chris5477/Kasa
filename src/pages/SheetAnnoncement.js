import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/annoncement.css";
import Information from "../components/Information";
import HeadingAnnoncement from "../components/HeadingAnnoncement";
import Owner from "../components/Owner";
import Tags from "../components/Tags";
import Stars from "../components/Stars";

class SheetAnnoncement extends Component {
  render() {
    const currentData = this.props.location.params[0];

    return (
      <div className="sheet-annoncement">
        <Header />
        <div className="bannier-house">
          <img className="picture-house" src={currentData.cover} alt="bannière de l'annonce" />
        </div>
        <div className="container-annoncement">
          <div className="main-info">
            <HeadingAnnoncement title={currentData.title} location={currentData.location} />
            <Owner nameOwner={currentData.host.name} picture={currentData.host.picture} />
          </div>
          <div className="secondary-info">
            <Tags tag={currentData.tags} /> {/* Probleme de key */}
            <Stars />
          </div>
          <div className="blocs-info">
            <Information detail={currentData.description}>Description</Information>
            <Information atout={currentData.equipments}>Equipements</Information> {/* Probleme de key */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SheetAnnoncement;

localStorage.clear();
