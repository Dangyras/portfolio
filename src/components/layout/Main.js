import React, { Component } from "react";
import History from "../History";
import Hero from "../Hero";
import Skills from "../Skills";
import Work from "../Work";
import "../../Section.css";

class Main extends Component {
    render() {
        return (
            <main>
                <Hero />
                <Work />
                <Skills />
                <History />
            </main>
        );
    }
}

export default Main;
