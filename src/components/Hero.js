import React, { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-inner">
                        <h2 className="section-heading">
                            <span className="heading-styled">Lorem ipsum.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
                            <br />
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam facilis voluptas commodi quas dignissimos. Voluptatibus quo qui minima laborum atque non, ratione
                            odit repellendus repudiandae corrupti dignissimos vero ut voluptates!
                            <a href="#" target="_blank" className="header-link">
                                Linkedin
                            </a>
                            and
                            <a href="#" target="_blank" className="header-link">
                                Dribbble
                            </a>
                            , download my
                            <a href="#" target="_blank" className="header-link">
                                resume
                            </a>
                            ,<a href="#"> </a>or write me an
                            <a href="#" className="header-link">
                                email.
                            </a>
                            <span className="fontawesome">
                                <span className="seework" />
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
