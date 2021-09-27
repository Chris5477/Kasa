import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import BlocAbout from "../components/BlocAbout";
import Bannier from "../components/Bannier";

import "../styles/bloc-about.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <Bannier picture={"img/about-bannier.jpg"} />
        <BlocAbout index={0}>Fiabilité</BlocAbout>
        <BlocAbout index={1}>Respect</BlocAbout>
        <BlocAbout index={2}>Service</BlocAbout>
        <BlocAbout index={3}>Responsabilité</BlocAbout>
        <Footer />
      </div>
    );
  }
}

export default About;
