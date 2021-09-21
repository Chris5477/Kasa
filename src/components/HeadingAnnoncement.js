import React, { Component } from "react";

import "../styles/headingAnnoncement.css"

class HeadingAnnoncement extends Component {
  state = this.props;

  render() {
    return (
      <div className="heading">
        <h3 className="nameHouse">{this.state.title}</h3>
        <p className="location">{this.state.location}</p>
      </div>
    );
  }
}

export default HeadingAnnoncement;


