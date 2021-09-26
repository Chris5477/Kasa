import React, { Component } from "react";

import "../styles/bannier.css";
class Bannier extends Component {
  render() {
    const { picture, text } = this.props;

    return (
      <div className="bannier-picture">
        <img className="img-bannier" src={picture} alt="bannière" />
        <p className="txt-overlay">{text}</p>
      </div>
    );
  }
}

export default Bannier;
