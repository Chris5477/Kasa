import React, { Component } from "react"

import "../styles/owner.css"

class Owner extends Component{
    
    state = this.props

    render(){
        return(
            <div className="owner">
              <p>{this.state.nameOwner}</p>
              <img className="picture-profil" src={this.state.picture} alt="avatar" />
            </div>
        )
    }
}

export default Owner

