import React from "react";
import "./Projects.css";
import projects from "./projects.js";
import "../../script.js";

function Projects() {
  const projectElement = projects.map((project, index) => {
    return (
      <div className="portfolio-grid reveal" key={index}>
        <figure className="project-fig">
          <img
            src={require(`../../assets/images/${project.image}`)}
            alt="project"
          />
          <figcaption>
            #{project.tag1} #{project.tag2} #{project.tag3}
          </figcaption>
        </figure>
        <h3>{project.heading}</h3>
        <div className="buttons">
          <a
            className="demo-btn button"
            target="_blank"
            href={project.demo}
            rel="noreferrer"
          >
            Demo
          </a>

          <a
            className="code-btn button"
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
      <h1 class="portfolio-heading reveal">
        My <span className="cyan">Projects</span>.
      </h1>
      <div class="portfolio--grid-container">{projectElement}</div>
      <div className="btn-wrapper">
        <a
          className="button"
          href="https://github.com/sidramwaseem"
          target="_blank"
          rel="noreferrer"
        >
          Check Out all projects <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Projects;
