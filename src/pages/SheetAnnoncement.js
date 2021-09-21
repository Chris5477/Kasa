import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/annoncement.css"
import Information from "../components/Information";
import HeadingAnnoncement from "../components/HeadingAnnoncement";
import Owner from "../components/Owner";
import Tags from "../components/Tags";
import Stars from "../components/Stars";


const obj = localStorage.getItem("data");
const objf = JSON.parse(obj);


class SheetAnnoncement extends Component {
  state = objf;
  
  render() {
  
    return (
      <div className="sheet-annoncement">
        <Header />
        <div className="bannier-house">
          <img className="picture-house" src={this.state.cover} alt="bannière de l'annonce" />
        </div>
        <div className="container-annoncement">
          <div className="main-info">
            <HeadingAnnoncement title={this.state.title} location={this.state.location} />
            <Owner nameOwner={this.state.host.name} picture={this.state.host.picture} />
          </div>
          <div className="secondary-info">
          <Tags tag={this.state.tags} />
          <Stars />
          </div>
          <div className="blocs-info">
               <Information detail={this.state.description}>Description</Information>
               <Information atout={this.state.equipments}>Equipements</Information>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SheetAnnoncement;

localStorage.clear();
