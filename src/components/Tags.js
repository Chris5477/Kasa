import React , { Component } from "react"

import "../styles/tags.css"

class Tags extends Component{

    state = this.props

    render(){
        return(
            <div className="tags">
            {this.state.tag.map((el) => (
              <p className="tag">{el}</p>
            ))}
            </div>
        )
    }
}

export default Tags