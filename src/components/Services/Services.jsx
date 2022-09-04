import React from "react";
import './services.css';
import "../../script.js";

function Services() {
  return (
    <section id="services">
    <blockquote className="service-header reveal">
    <h2>My <span className="cyan">Services </span>.</h2>
    <p>What's the point of learning all the cool stuff if I couldn't put them to good use?</p>
    </blockquote>
      <div class="all">
        <div class="lefter">
          <div class="text">HTML/CSS Responsive Web Design</div>
        </div>
        <div class="left">
          <div class="text">Figma to HTML</div>
        </div>
        <div class="center">
          <div class="explainer">
            <span>Hover me</span>
          </div>
          <div class="text">Frontend Development</div>
        </div>
        <div class="right">
          <div class="text">React Development</div>
        </div>
        <div class="righter">
          <div class="text">Semantic Code</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
