import React, { Component } from "react";

import "../styles/stars.css";

class Stars extends Component {
  render() {
    let arrayStar = [];
    for (let star = 0; star < this.props.rating; star++) {
      arrayStar = [...arrayStar, "../img/star.png"];
    }

    while (arrayStar.length !== 5) {
      arrayStar = [...arrayStar, "../img/greyStar.png"];
    }

    return (
      <div className="stars">
        {arrayStar.map((el, index) => (
          <img className="imgStar" src={el} key={index} alt="étoile" />
        ))}
      </div>
    );
  }
}

export default Stars;
