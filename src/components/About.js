import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <section id="section-about">
                <div className="container">
                    <div className="section-inner">
                        <h2 className="section-heading">
                            <span className="heading-styled">Apie mane.</span>
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
                            <br />
                        </h2>
                        <div className="information-list">
                            <ul>
                                <li>
                                    <span className="name">Vardas</span>

                                    <span className="name">Dangyras Stepanavicius</span>
                                </li>
                                <li>
                                    <span className="name">Miestas</span>

                                    <span className="name">Kaunas | Marijampole</span>
                                </li>
                                <li>
                                    <span className="name">Telefonas</span>

                                    <span className="name">99999</span>
                                </li>
                                <li>
                                    <span className="name">Issilavinimas</span>

                                    <span className="name">VDU</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
