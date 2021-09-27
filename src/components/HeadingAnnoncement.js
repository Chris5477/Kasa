import React, { Component } from "react";

import "../styles/headingAnnoncement.css";

class HeadingAnnoncement extends Component {
  render() {
    const { title, location } = this.props;
    return (
      <div className="heading">
        <h3 className="nameHouse">{title}</h3>
        <p className="location">{location}</p>
      </div>
    );
  }
}

export default HeadingAnnoncement;
