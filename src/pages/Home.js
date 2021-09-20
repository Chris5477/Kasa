import React, { Component } from "react";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <div className="home">
          <Header />
        <h2>Page principale</h2>
      </div>
    );
  }
}

export default Home;
