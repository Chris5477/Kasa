import React, { Component } from "react";

import "../styles/footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="logo-footer" src="img/logo-footer.png" alt="logo du site" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
