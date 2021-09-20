import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
