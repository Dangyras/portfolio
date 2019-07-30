import React, { Component } from "react";
import History from "../History";
import Hero from "../Hero";
import Skills from "../Skills";
import Projects from "../Projects";
import About from "../About";
import "../../Section.css";

class Main extends Component {
    render() {
        return (
            <main>
                <Hero />
                <Projects />
                <About />
                <Skills />
                <History />
            </main>
        );
    }
}

export default Main;
