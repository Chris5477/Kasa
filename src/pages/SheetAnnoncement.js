import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Information from "../components/Information";
import HeadingAnnoncement from "../components/HeadingAnnoncement";
import Owner from "../components/Owner";
import Tags from "../components/Tags";
import Stars from "../components/Stars";

import "../styles/annoncement.css";
import kasa from "../data.json";

class SheetAnnoncement extends Component {
  state = {
    index: 0,
  };

  getAnnoncement = () => kasa.find((item) => this.props.match.params.id === item.id);

  previousPicture = () => {
    const photo = document.querySelector(".picture-house");
    photo.classList.add("previous-picture");
    setTimeout(() => photo.classList.remove("previous-picture"), 800);
  };

  nextPicture = () => {
    const photo = document.querySelector(".picture-house");
    photo.classList.add("next-picture");
    setTimeout(() => photo.classList.remove("next-picture"), 800);
  };

  render() {
    const currentData = this.getAnnoncement();

    const isBtnLeft =
      currentData.pictures.length === 1 ? null : (
        <div
          className="zone-click prev"
          onClick={() =>
            this.state.index === 0
              ? this.setState({ index: currentData.pictures.length - 1 }) & this.previousPicture()
              : this.setState({ index: this.state.index - 1 }) & this.previousPicture()
          }
        >
          <span className={"fas fa-chevron-left"}></span>
        </div>
      );

    const isBtnRight =
      currentData.pictures.length === 1 ? null : (
        <div
          className="zone-click next"
          onClick={() =>
            this.state.index === currentData.pictures.length - 1
              ? this.setState({ index: 0 }) & this.nextPicture()
              : this.setState({ index: this.state.index + 1 }) & this.nextPicture()
          }
        >
          <span className={"fas fa-chevron-right"}></span>
        </div>
      );

    return (
      <div className="sheet-annoncement">
        <Header />
        <div className="bannier-house">
          {isBtnLeft}
          <img className="picture-house" src={currentData.pictures[this.state.index]} alt="bannière de l'annonce" />
          {isBtnRight}
        </div>
        <div className="container-annoncement">
          <div className="main-info">
            <HeadingAnnoncement title={currentData.title} location={currentData.location} />
            <Owner nameOwner={currentData.host.name} picture={currentData.host.picture} />
          </div>
          <div className="secondary-info">
            <Tags tag={currentData.tags} />
            <Stars rating={currentData.rating} />
          </div>
          <div className="blocs-info">
            <Information detail={currentData.description} title={"Description"} index={0} />
            <Information atout={currentData.equipments} title={"Equipement"} index={1} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SheetAnnoncement;

localStorage.clear();
