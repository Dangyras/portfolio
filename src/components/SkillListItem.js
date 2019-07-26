import React, { Component } from "react";

class SkillsListItem extends Component {
    render() {
        return (
            <li className="skill-item">
                <h4>HTML | CSS</h4>
                <div>
                    <span className="skill-progress shadow" />
                    <div className="skill-examples" />
                </div>
            </li>
        );
    }
}

export default SkillsListItem;
