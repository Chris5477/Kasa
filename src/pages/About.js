import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

import "../styles/bloc-about.css"
import BlocAbout from "../components/BlocAbout";

class About extends Component {
    render(){
        return (
            <div className="about">
                <Header />
                <BlocAbout />
                <BlocAbout />
                <BlocAbout />
                <BlocAbout />
                <Footer />
            </div>
        )
    }
}

export default About