import React, { Component } from "react";

class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggleCard() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <div className={this.state.active ? "card-visible point-wrapper" : "point-wrapper"}>
                <span className="point shadow" onClick={() => this.toggleCard()} />
                <div className="experience-content shadow">
                    <button className="close" title="Uzdaryti" onClick={() => this.toggleCard()} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <div className="time">
                        <span>2000</span> <span>2000</span>
                    </div>
                    <button className="info" title="Daugiau">
                        ?
                    </button>
                </div>
            </div>
        );
    }
}

export default ExperienceItem;
