import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllAnnoncements from "../components/AllAnnoncements";
import Bannier from "../components/Bannier";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Bannier picture={"img/home-bannier.jpg"} text={"Chez vous, partout et ailleurs"}></Bannier>
        <AllAnnoncements />
        <Footer />
      </div>
    );
  }
}

export default Home;
