import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Information from "../components/Information";
import HeadingAnnoncement from "../components/HeadingAnnoncement";
import Owner from "../components/Owner";
import Tags from "../components/Tags";
import Stars from "../components/Stars";

import "../styles/annoncement.css";

class SheetAnnoncement extends Component {
  state = {
    index: 0,
  };

  render() {
    const currentData = this.props.location.params;

    return (
      <div className="sheet-annoncement">
        <Header />
        <div className="bannier-house">
          <span
            className="fas fa-chevron-left"
            onClick={() => this.setState({ index: this.state.index === 0 ? this.state.index : this.state.index - 1 })}
          ></span>
          <img className="picture-house" src={currentData.pictures[this.state.index]} alt="bannière de l'annonce" />
          <span
            className="fas fa-chevron-right"
            onClick={() => this.setState({ index: this.state.index === currentData.pictures.length - 1 ? this.state.index : this.state.index + 1 })}
          ></span>
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
