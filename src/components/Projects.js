import React, { Component } from "react";
import nobigart from "../images/nobigart.png";
import griliai from "../images/griliai.png";

class Projects extends Component {
    render() {
        return (
            <section id="section-projects">
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
                                    <a href="/">Visi</a>
                                </li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>PHP</li>
                            </ul>
                            <div className="projects-wrapper">
                                <figure className="grid-item shadow">
                                    <div className="grid-item-inner">
                                        <img src={nobigart} alt="" />
                                        <div className="grid-item-overlay">
                                            <a href="/">
                                                <div className="grid-item-heading">
                                                    <h3>Nobig.art</h3>
                                                    <span>Javascript | Shopify</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </figure>

                                <figure className="grid-item shadow">
                                    <div className="grid-item-inner">
                                        <img src={griliai} alt="" />
                                        <div className="grid-item-overlay">
                                            <a href="/">
                                                <div className="grid-item-heading">
                                                    <h3>Lorem ipsum</h3>
                                                    <span>Lorem, ipsum dolor.</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <figure className="grid-item shadow">
                                    <div className="grid-item-inner">
                                        <img src="https://source.unsplash.com/random/400x400" alt="" />
                                        <div className="grid-item-overlay">
                                            <a href="/">
                                                <div className="grid-item-heading">
                                                    <h3>Lorem ipsum</h3>
                                                    <span>Lorem, ipsum dolor.</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
