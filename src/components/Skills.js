import React, { Component } from "react";
import SkillsList from "./SkillsList";

class Skills extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-inner">
                        <h2 className="section-heading">
                            <span className="heading-styled">Sugebejimai.</span>
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
                            <br />
                        </h2>
                        <SkillsList />
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
