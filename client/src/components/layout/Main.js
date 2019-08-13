import React, { Component } from "react";
import Experience from "../Experience";
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
                <Experience />
            </main>
        );
    }
}

export default Main;
