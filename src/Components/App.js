// Ui components
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";

import React, { Component } from "react";
import "../css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, scroll: parseInt(document.getElementsByTagName("html")[0].dataset.scroll) };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        setInterval(() => this.setState({ scroll: parseInt(document.getElementsByTagName("html")[0].dataset.scroll) }), 1);
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div className="App">
                <NavBar /> <Home /><AboutMe /> <Projects />
                <div id="about_me"></div>
                <div id="projects"></div>
            </div>
        );
    }
}

export default App;
