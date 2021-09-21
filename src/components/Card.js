import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/card.css";

class Card extends Component {

  state = this.props.el;
  
  aaa = () => {
    const ppp = JSON.stringify(this.state)
    localStorage.setItem("data", ppp)
  }
  
  
  render() {
    
   

    return (
      <NavLink exact to="sheetAnnoncement">
        <div className="card" onClick={() => this.aaa(this.props.index)}>
          <h3 className="title-card">{this.state.title}</h3>
          <img className="cover" src={this.state.cover} alt="annonce" />
        </div>
      </NavLink>
    );
  }
}

export default Card;
