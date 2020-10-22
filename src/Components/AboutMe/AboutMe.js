import React, { Component } from "react";
import "../../css/AboutMe.css";
import AboutMe_image from "../../Images/AboutMe_image.svg";

export default class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div className="AboutMe_hedder">About Me</div>
                <div className="AboutMe_content">
                    <div className="left_alligned_about_me_content">
                        <img className="AboutMe_name" alt="" src={AboutMe_image}></img>
                    </div>
                    <div className="right_alligned_about_me_content">
                        <p className="about_me_decription">
                            Heyy! I am Karan Gandhi. I am Currently studing in C.N.M. School Grade 9 and I have been doing programming since 3 years. I started programming when I was in grade 7, when Programming was first introduced to us in our computer subject. I have compleated learning the HTML language in detail as well as CSS and JavaScript which are the major coding languages for web devoloping. I also do Robotic Programming in languages like Java.
                            <br /> I have learnt all these languages from multiple sites like codeacademy, MDN Docs, Google Docs. I also know node.js which is used for server-side and client side programming .
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
