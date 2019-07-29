import React, { Component } from "react";
import History from "../History";
import Hero from "../Hero";
import Skills from "../Skills";
import Work from "../Work";
import About from "../About";
import "../../Section.css";

class Main extends Component {
    render() {
        return (
            <main>
                <Hero />
                <Work />
                <About />
                <Skills />
                <History />
            </main>
        );
    }
}

export default Main;
