import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/annoncement.css"
import Information from "../components/Information";


const obj = localStorage.getItem("data");
const objf = JSON.parse(obj);


class SheetAnnoncement extends Component {
  state = objf;
  
  render() {
  
    return (
      <div className="sheet-annoncement">
        <Header />
        <div className="container-annoncement">
          <div className="main-info">
            <div className="heading">
              <h2 className="nameHouse">{this.state.title}</h2>
              <h3 className="loc">{this.state.location}</h3>
            </div>
            <div className="owner">
              <p>{this.state.host.name}</p>
              <img className="picture-profil" src={this.state.host.picture} alt="avatar" />
            </div>
          </div>
          <div className="secondary-info">
            <div className="tags">
              {this.state.tags.map((el) => (
                <p className="tag">{el}</p>
              ))}
            </div>
            <div className="stars">
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
              </div>
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
