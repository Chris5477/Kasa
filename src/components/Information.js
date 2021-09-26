import React, { Component } from "react";

import "../styles/information.css";

class Information extends Component {
  render() {
    const { detail, atout } = this.props;

    return (
      <article className="detail">
        <h2 className="heading-box">
          {this.props.children} <span className="fas fa-chevron-up"></span>
        </h2>
        {this.props.children === "Description" ? <p className="description">{detail}</p> : atout.map((el) => <li className="element">{el}</li>)}
      </article>
    );
  }
}

export default Information;
