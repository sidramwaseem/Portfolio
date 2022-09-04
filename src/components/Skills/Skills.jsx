import React from "react";
import tags from "./tags.js";
import "./Skills.css";
import "../../script.js"

function Skills() {
 
  const tagElement = tags.map((tag,index) => {
    return (
      <a href={tag.href} target="_blank" rel="noreferrer" key={index} className="reveal">
        <span
          style={{
            color: tag.color,
            backgroundColor: tag.backgroundColor,
            cursor: tag.href ? "pointer" : "not-allowed",
          }}
          className="tag"
        >
          {tag.name}
        </span>
      </a>
    );
  });
  return (
    <section id="skills">
      <article className="skill-header reveal">
        <h2>
          My <span className="cyan">Skillset</span>
        </h2>
        <p>
          On a roadmap to provide the colorless tags their entitled color.
        </p>
      </article>
      <main className="tags-container fade-in">{tagElement}</main>
    </section>
  );
}

export default Skills;
