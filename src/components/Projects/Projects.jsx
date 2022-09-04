import React from "react";
import "./Projects.css";
// import imgport from "../../assets/project images/Tenzies.png";
import projects from "./projects.js";

function Projects() {
  const projectElement = projects.map((project, index) => {
    return (
      <div class="portfolio-grid" key={index}>
        <figure class="project-fig">
          <img src={`../../assets/images/${project.image}`} alt="project" />
          <figcaption>
            #{project.tag1} #{project.tag2} #{project.tag3}
          </figcaption>
        </figure>
        <h3>{project.heading}</h3>
        <div class="buttons">
          <a
            class="demo-btn button"
            target="_blank"
            href={project.demo}
            rel="noreferrer"
          >
            Demo
          </a>

          <a
            class="code-btn button"
            target="_blank"
            href={project.repo}
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    );
  });
  return (
    <section id="projects">
      <h1 class="portfolio-heading">
        My <span className="cyan">Projects</span>.
      </h1>
      <div class="portfolio--grid-container">{projectElement}</div>
    </section>
  );
}

export default Projects;
