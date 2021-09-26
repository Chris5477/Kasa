import React, { Component } from "react";
import Annoncement from "./Annoncement";

import "../styles/all-annoncements.css";

class AllAnnoncements extends Component {
  render() {
    return (
      <div className="all-annoncements">
        <Annoncement />
      </div>
    );
  }
}

export default AllAnnoncements;
