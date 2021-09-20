import React, { Component } from "react";
import Card from "./Card";

const kasa = require("../data.json")
class Annoncement extends Component{
    
    
    render(){


        return(
            <>
            {kasa.map(el => <Card el={el} key={el.id} />)}
            </>
        )
    }
}

export default Annoncement