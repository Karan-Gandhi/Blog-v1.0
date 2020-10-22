import React, { Component } from "react";
import ProjectCard from "../UI/ProjectCard";
import Button from "../UI/Button";
import "../../css/Projects.css";

import SortingVisualiser from "../../Images/SortingVisualiserIcon.svg";
import PathFindingVisualiser from "../../Images/PathFindingVisualiserIcon.svg";

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <div className="project_headder">Projects</div>
                <table>
                    <tbody>
                        <tr>
                            <td className="Project-cell">
                                <ProjectCard number="0" width="" height="" title="Sorting Visualiser" icon={SortingVisualiser} content="Here I try to visualise 12 different sorting algorithms generating a random array having default size of 500 elements ranging between 1000 and 10" link="" color="#29CB8B" />
                            </td>
                            <td className="Project-cell">
                                <ProjectCard number="0" width="" height="" title="PathFinding Visualiser" icon={PathFindingVisualiser} content="Here I try to visualise 12 different sorting algorithms generating a random array having default size of 500 elements ranging between 1000 and 10" link="" color="#FFA621" />
                            </td>
                            <td className="Project-cell">
                                <ProjectCard number="0" width="" height="" title="Sorting Visualiser" icon={SortingVisualiser} content="Here I try to visualise 12 different sorting algorithms generating a random array having default size of 500 elements ranging between 1000 and 10" link="" color="#29CB8B" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button cname="about_me_btn" text="Load More" width={window.innerWidth * 0.8 - 35 * 3 + "px"} height="50px" onclick={() => (window.location.href = "#loadMore")} backgroundColor="#E9FAF3" color="#2ECC8E" hoverColor="#1c9062" border="none" fontWeight="500" borderRadius="5px" fontSize="15px"></Button>
            </div>
        );
    }
}
