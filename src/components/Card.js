import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

class Card extends Component {
  render() {
    const { title, cover } = this.props.el;
    return (
      <Link to={{ pathname: "sheetAnnoncement", params: this.props.el }}>
        <div className="card">
          <h3 className="title-card">{title}</h3>
          <img className="cover" src={cover} alt="annonce" />
        </div>
      </Link>
    );
  }
}

export default Card;
