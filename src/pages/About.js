import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

import BlocAbout from "../components/BlocAbout";
import Bannier from "../components/Bannier";

import "../styles/bloc-about.css"

class About extends Component {
    render(){
        return (
            <div className="about">
                <Header />
                <Bannier picture={"img/about-bannier.jpg"} />
                <BlocAbout>Fiabilité</BlocAbout>
                <BlocAbout>Respect</BlocAbout>
                <BlocAbout>Service</BlocAbout>
                <BlocAbout>Responsabilité</BlocAbout>
                <Footer />
            </div>
        )
    }
}

export default About