import React, { Component } from "react";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor,
            color: props.color,
            border: props.border,
            borderRadius: props.borderRadius,
            fontWeight: props.fontWeight,
            fontSize: props.fontSize,
            onclick: props.onclick,
            hoverColor: props.hoverColor,
            cname: props.cname
        };
    }

    getStyles = () => {
        return {
            transition: "0.4s",
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
            border: this.state.border,
            fontWeight: this.state.fontWeight,
            borderRadius: this.state.borderRadius,
            width: this.state.width,
            height: this.state.height,
            fontSize: this.state.fontSize,
            cursor: "pointer"
        };
    };

    render() {
        return (
            <div className={this.state.cname}>
                <button onClick={this.state.onclick} onMouseOver={(e) => (e.target.style.backgroundColor = this.state.hoverColor)} onMouseLeave={(e) => (e.target.style.backgroundColor = this.state.backgroundColor)} style={this.getStyles()}>
                    {this.state.text}
                </button>
            </div>
        );
    }
}
