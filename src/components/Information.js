import React, { Component } from "react";

class Information extends Component {

    state = this.props
    
    
    render(){
        
        console.log(this.state)
        return(
            <article className="detail">
                <h2>{this.props.children}</h2>
                { this.props.children === "Description"?  <p>{this.props.detail}</p> : this.props.atout.map(el => <li className="element">{el}</li>)}
            </article>
        )
    }
}

export default Information