import React, { Component } from "react";

import "../styles/bannier.css"
class Bannier extends Component {

    state = this.props
    render(){
        
        return(
            <div className="bannier-picture">
                <img className="img-bannier" src={this.state.picture} alt="bannière" /> 
                <p className="txt-overlay">{this.state.children}</p>
               
            </div>
        )
    }
}

export default Bannier