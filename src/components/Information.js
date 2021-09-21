import React, { Component } from "react";

import "../styles/information.css"

class Information extends Component {

    state = this.props
    
    
    render(){
        
        console.log(this.state)
        return(
            <article className="detail">
                <h2 className="heading-box">{this.props.children} <span className="fas fa-chevron-up"></span></h2>
                { this.props.children === "Description"?  <p className="description">{this.props.detail}</p> : this.props.atout.map(el => <li className="element">{el}</li>)}
                
            </article>
        )
    }
}

export default Information