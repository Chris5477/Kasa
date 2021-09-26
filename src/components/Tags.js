import React , { Component } from "react"

import "../styles/tags.css"

class Tags extends Component{

    

    render(){
        return(
            <div className="tags">
            {this.props.tag.map((el, index) => (
              <p key={index} className="tag">{el}</p>
            ))}
            </div>
        )
    }
}

export default Tags