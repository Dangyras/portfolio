import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-inner">
                        <h2 className="section-heading">
                            <span className="heading-styled">Darbai.</span>
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
                            <br />
                        </h2>
                        <div className="projects">
                            <ul className="projects-menu">
                                <li>
                                    <a>Visi</a>
                                </li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>PHP</li>
                            </ul>
                            <div className="projects-wrapper" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
