import React, { Component } from "react";
import logo from "../../icons/logo.svg";
import phone from "../../icons/phone.svg";
import email from "../../icons/email.svg";
import doc from "../../icons/document.svg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggleMenu() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <header className={this.state.active ? "menu-visible" : null}>
                <div className="section announcement-section">
                    <div className="container" />
                </div>
                <div className="section header-section">
                    <div className="container">
                        <div className="navigation-wrapper">
                            <div className="logo">
                                <img src={logo} className="logo" alt="logo" draggable="false" />
                            </div>
                            <nav>
                                <ul>
                                    <li>darbai</li>
                                    <li>apie mane</li>
                                </ul>
                                <ul className="menu-icons">
                                    <li>
                                        <img src={phone} className="logo" alt="logo" draggable="false" />
                                    </li>
                                    <li>
                                        <img src={email} className="logo" alt="logo" draggable="false" />
                                    </li>
                                    <li>
                                        <img src={doc} className="logo" alt="logo" draggable="false" />
                                    </li>
                                </ul>
                            </nav>
                            <button className="nav-toggle" onClick={() => this.toggleMenu()}>
                                <span />
                                <span className="nav-toggle-middle" />
                                <span />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
