import React from "react";
import logo from "../../logo.svg";
import phone from "../../phone.svg";
import email from "../../email.svg";
import doc from "../../document.svg";

export default function Header() {
    return (
        <header>
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
                            <ul class="menu-icons">
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
                        <button id="mobile-nav-toggle" className="nav-toggle">
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
