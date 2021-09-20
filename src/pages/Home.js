import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllAnnoncements from "../components/AllAnnoncements";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <AllAnnoncements />
        <Footer />
      </div>
    );
  }
}

export default Home;
