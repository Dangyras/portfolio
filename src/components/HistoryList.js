import React, { Component } from "react";

class HistoryList extends Component {
    render() {
        return (
            <div className="history-list">
                <div className="point-wrapper">
                    <span className="point shadow" />
                    <div className="experience-content shadow">
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>2000 - 2000</span>
                        <span className="info">?</span>
                    </div>
                </div>
                <div className="point-wrapper">
                    <span className="point shadow" />
                    <div className="experience-content shadow" />
                </div>
                <div className="point-wrapper">
                    <span className="point shadow" />
                    <div className="experience-content shadow" />
                </div>
                <div className="point-wrapper">
                    <span className="point shadow" />
                    <div className="experience-content shadow" />
                </div>
                <div className="point-wrapper">
                    <span className="point shadow" />
                    <div className="experience-content shadow" />
                </div>
            </div>
        );
    }
}

export default HistoryList;
