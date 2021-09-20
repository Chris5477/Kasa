import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/card.css";


class Card extends Component {
  render() {
    return (
      <NavLink exact to="/sheetAnnoncement">
        <div className="card">
          <h3 className="title-card">{this.props.el.title}</h3>
          <img className="cover" src={this.props.el.cover} alt="annonce" />
        </div>
      </NavLink>
    );
  }
}

export default Card;
