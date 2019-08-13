import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";

class HistoryList extends Component {
    render() {
        return (
            <div className="experience-list">
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </div>
        );
    }
}

export default HistoryList;
