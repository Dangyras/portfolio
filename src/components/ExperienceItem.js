import React, { Component } from "react";

class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: false,
            expand: false
        };
    }

    toggleCard() {
        const currentState = this.state.card;
        this.setState({ card: !currentState });
    }

    toggleContent() {
        const currentState = this.state.expand;
        this.setState({ expand: !currentState });
        if (!currentState) {
            document.body.classList.add("no-sroll");
        } else {
            document.body.classList.remove("no-sroll");
        }
    }

    render() {
        return (
            <div className={this.state.card ? "card-visible point-wrapper" : "point-wrapper"}>
                <span className="point shadow" onClick={() => this.toggleCard()} />
                <div className={this.state.expand ? "experience-content shadow open" : "experience-content shadow"}>
                    <button
                        className="close"
                        title="Uzdaryti"
                        onClick={() => {
                            this.toggleCard();
                            this.setState({ expand: false });
                            document.body.classList.remove("no-sroll");
                        }}
                    />
                    <h3>Lorem, ipsum dolor.</h3>
                    <div className="time">
                        <span>2000</span> <span>2000</span>
                    </div>
                    <button
                        className="info"
                        title="Daugiau"
                        onClick={() => {
                            this.toggleContent();
                        }}
                    >
                        ?
                    </button>
                </div>
            </div>
        );
    }
}

export default ExperienceItem;
