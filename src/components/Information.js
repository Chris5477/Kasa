import React, { Component } from "react";

import "../styles/information.css";

class Information extends Component {
  handleClick = (index) => {
    const articles = document.querySelectorAll(".detail");
    articles[index].lastChild.classList.toggle("no-txt");
    const icons = document.querySelectorAll(".fa-chevron-up");
    icons[index].classList.toggle("addAnimation");
  };

  render() {
    const { title, detail, atout, index } = this.props;

    const nameBloc =
      title === "Description" ? (
        <p className="description">{detail}</p>
      ) : (
        <ul className="list-element">
          {atout.map((el, index) => (
            <li className="element" key={index}>
              {el}
            </li>
          ))}
        </ul>
      );

    return (
      <article onClick={() => this.handleClick(index)} className="detail">
        <h2 onClick={this.toShowTxt} className="heading-box">
          {title} <span className="fas fa-chevron-up"></span>
        </h2>
        {nameBloc}
      </article>
    );
  }
}

export default Information;
