import React, { Component } from "react";

class HistoryList extends Component {
    render() {
        return (
            <div className="history-list">
                <div className="point-wrapper">
                    <span className="point shadow" />
                    <div className="experience-content shadow">
                        <button className="close" title="Uzdaryti" />
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>2000 - 2000</span>
                        <button className="info" title="Daugiau">
                            ?
                        </button>
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
