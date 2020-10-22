import React, { Component } from "react";
import "../../css/NavBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="icon-container nav-item">
                    <div className="icon nav-item"></div>
                    <div className="icon-name nav-item">Karan Gandhi</div>
                    <div className="nav-location" id="nav-location"></div>
                    <div className="navagation nav-item">
                        <div className="nav-item item" id="home" onClick={() => (window.location.href = "#")}>
                            Home
                        </div>
                        <div className="nav-item item" id="About" onClick={() => (window.location.href = "#about_me")}>
                            About Me
                        </div>
                        <div className="nav-item item" id="Projects" onClick={() => (window.location.href = "#projects")}>
                            Projects
                        </div>
                        <div className="nav-item item" id="Contact" onClick={() => (window.location.href = "#contact")}>
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
