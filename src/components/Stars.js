import React , { Component } from 'react'

import "../styles/stars.css"

class Stars extends Component{
    render(){
        return(
            <div className="stars">
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
               <img src="img/star.png" alt="étoile"/>
              </div>
        )   
     }
}

export default Stars