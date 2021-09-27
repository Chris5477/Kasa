import React, { Component } from "react";

import "../styles/owner.css";

class Owner extends Component {
  render() {
    const { nameOwner, picture } = this.props;
    return (
      <div className="owner">
        <p className="name-owner">{nameOwner}</p>
        <img className="picture-profil" src={picture} alt="avatar" />
      </div>
    );
  }
}

export default Owner;
