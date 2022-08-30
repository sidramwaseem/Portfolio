import React from "react";
import "./Home.css";

function Home() {
  return (
    <header>
      <nav className="nav">
        <aside className="brand-name">
          <span className="logo-name">SW</span>
          <h1 className="h1">Portfolio</h1>
        </aside>
        <input type="checkbox" id="nav-check" />
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#home" target="_blank">
            Home
          </a>
          <a href="#services" target="_blank">
            Services
          </a>
          <a href="#projects" target="_blank">
            Projects
          </a>
          <a href="#contact" target="_blank">
            Contact
          </a>
        </div>
        <div class="search-box">
        <button class="btn-search"><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" placeholder="Type to Search..."/>
      </div>
      </nav>
      <section id="home"></section>
    </header>
  );
}

export default Home;
