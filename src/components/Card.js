import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const kasa = require("../data.json")

class Card extends Component {
  render() {
    const {title, cover} = this.props.el
    return (
      <Link to={{pathname : "sheetAnnoncement", params: kasa}}> 
        <div className="card">
          <h3 className="title-card">{title}</h3>
          <img className="cover" src={cover} alt="annonce" />
        </div>
      </Link>
    );
  }
}

export default Card;
