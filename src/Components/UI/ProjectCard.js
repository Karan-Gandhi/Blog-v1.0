import React, { Component } from "react";

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: props.number,
            width: props.width,
            height: props.height,
            title: props.title,
            icon: props.icon,
            content: props.content,
            link: props.link,
            color: props.color
        };
    }

    getLearnMoreStyle = () => {
        return { color: this.state.color };
    };

    render() {
        return (
            <div className="Project_Card">
                <img src={this.props.icon} className="project_icon" />
                <div className="project_title">{this.state.title}</div>
                <p className="project_description">{this.state.content}</p>
                <a className="learn_more_link" style={this.getLearnMoreStyle()} href={this.state.link}>
                    Learn More
                </a>
            </div>
        );
    }
}
