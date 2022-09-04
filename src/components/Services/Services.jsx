import React from "react";
import './Services.css;'
import "../../script.js";

function Services() {
  return (
    <section id="services">
    <blockquote className="service-header">
    <h2>Now let's talk about what I <span className="cyan">can do </span>for you!</h2>
    </blockquote>
      <div class="all">
        <div class="lefter">
          <div class="text">Hosting</div>
        </div>
        <div class="left">
          <div class="text">Web Design</div>
        </div>
        <div class="center">
          <div class="explainer">
            <span>Hover me</span>
          </div>
          <div class="text">Frontend Development</div>
        </div>
        <div class="right">
          <div class="text">Backend Development</div>
        </div>
        <div class="righter">
          <div class="text">SEO</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
