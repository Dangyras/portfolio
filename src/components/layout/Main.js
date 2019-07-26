import React, { Component } from "react";
import History from "../History";
import Hero from "../Hero";
import Skills from "../Skills";
import Work from "../Work";

class Main extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Work />
                <Skills />
                <History />
            </div>
        );
    }
}

export default Main;
