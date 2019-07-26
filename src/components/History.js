import React, { Component } from "react";
import HistoryList from "./HistoryList";

class History extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="section-inner">
                        <h2 className="section-heading">
                            <span className="heading-styled">Patirtis.</span>
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
                            <br />
                        </h2>
                        <HistoryList />
                        <h2 className="section-heading heading-right">
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
                            <br />
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;
