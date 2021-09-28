import React, { Component } from "react";
import Card from "./Card";

import "../styles/all-annoncements.css";

class AllAnnoncements extends Component {
  render() {
    return (
      <div className="all-annoncements">
         {this.props.data.map((el) => (
          <Card el={el} key={el.id} />
        ))}
      </div>
    );
  }
}

export default AllAnnoncements;
