import React, { Component } from "react";
import SkillsListItem from "./SkillListItem";

class SkillsList extends Component {
    render() {
        return (
            <div className="skills-list">
                <ul>
                    <SkillsListItem />
                    <SkillsListItem />
                    <SkillsListItem />
                    <SkillsListItem />
                </ul>
            </div>
        );
    }
}

export default SkillsList;
