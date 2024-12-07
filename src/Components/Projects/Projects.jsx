import React from "react";
import "./Projects.css";
import projects_data from "../../assets/projects_data";
import arrow_2 from "../../assets/arrow_2.svg";
import github_1 from "../../assets/github_1.svg";
import view_2 from "../../assets/view_2.svg";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(3); // Show 3 projects by default

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 650) {
                setVisibleProjects(3); // Show fewer projects on small screens
            } else {
                setVisibleProjects(3);
            }
        };

        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleViewMore = () => {
        setVisibleProjects((prev) => (prev === 3 ? projects_data.length : 3));
    };

    return (
        <div id="projects" className="projects">
            <div className="projects-title">
                <h1>My Projects</h1>
            </div>
            <div className="projects-container">
                {projects_data.slice(0, visibleProjects).map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.p_img} alt={project.p_name} className="project-image" />
                        <h3>{project.p_name}</h3>
                        <p>{project.p_desc}</p>
                        <div className="project-links">
                            <a href={project.code_url} target="_blank" rel="noopener noreferrer">
                                <img src={github_1} alt="GitHub link" className="Github" />
                            </a>
                            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                <img src={view_2} alt="Live view link" className="Live-view" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="projects-showmore" onClick={handleViewMore}>
                <p>{visibleProjects === 3 ? "View More" : "View Less"}</p>
                <img src={arrow_2} alt="View more arrow" />
            </div>
        </div>
    );
};

export default Projects