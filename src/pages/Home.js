import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllAnnoncements from "../components/AllAnnoncements";
import Bannier from "../components/Bannier";
import kasa from "../data.json"
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Bannier picture={"img/home-bannier.jpg"} textDesktop={"Chez vous, partout et ailleurs"} textMobile={"Chez vous, \n partout et ailleurs"}></Bannier>
        <AllAnnoncements data={kasa}/>
        <Footer />
      </div>
    );
  }
}

export default Home;
