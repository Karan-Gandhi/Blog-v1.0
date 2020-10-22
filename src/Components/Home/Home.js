import React, { Component } from "react";
import Home_image from "../../Images/Home_image.svg";
import Button from "../UI/Button";
import "../../css/Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home" id="homecnt">
                <div className="home_left_align_content">
                    <div className="hello_i_am">Hello I am</div>
                    <div className="KaranGandhi">Karan Gandhi</div>
                    <div className="profession">Web Devoloper | Software Engeneer</div>
                    <Button cname="about_me_btn" text="About Me" width="170px" height="50px" onclick={() => (window.location.href = "#about_me")} backgroundColor="#29CB8B" color="white" hoverColor="#1c9062" border="none" fontWeight="" borderRadius="5px" fontSize="17px"></Button>
                </div>
                <div className="home_right_aligned_content">
                    <img alt="" className="home_image" src={Home_image}></img>
                </div>
            </div>
        );
    }
}
