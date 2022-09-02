import React from "react";
import tags from "./tags.js";
import "./Skills.css";

function Skills() {
  const tagElement = tags.map((tag) => {
    return (
      <a href={tag.href} target="_blank" rel="noreferrer">
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
      <article className="skill-header">
        <h2>
          My <span className="cyan">Skillset</span>
        </h2>
        <p>
          Fingers crossed for the colorless tags to get their entitled colors
          soon.
        </p>
      </article>
      <main className="tags-container">{tagElement}</main>
    </section>
  );
}

export default Skills;
