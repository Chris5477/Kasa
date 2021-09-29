import React, { Component } from "react";

import "../styles/bannier.css";
class Bannier extends Component {
  render() {
    
    const { picture, textDesktop, textMobile } = this.props;
    const device = window.screen.width < 798 ? textMobile : textDesktop

    return (
      <div className="bannier-picture">
        <img className="img-bannier" src={picture} alt="bannière" />
        <p className="txt-overlay">{device}</p>
        
      </div>
    );
  }
}

export default Bannier;
