import React, { Component } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
