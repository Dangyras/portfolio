import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="section menu-section">
                <div className="container">
                    <div className="footer-menu">
                        <h3>Feel free to contact me! I'm on the lookout for full-time work opportunities and I'd love to collaborate.</h3>
                        <ul className="menu">
                            <li>
                                <a href="/">Email</a>
                            </li>
                            <li>
                                <a href="/">Phone</a>
                            </li>
                            <li>
                                <a href="/">Other</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section copyright-section">
                <div className="container">
                    <div className="copyright">
                        <p>© Dangyras Stepanavicius // 2019</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
