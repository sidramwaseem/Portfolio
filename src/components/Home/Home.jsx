import React from "react";
import "./Home.css";
import profileImg from "../../assets/profile-img.jpg";
import "../../script.js"

function Home() {
  return (
    <header>
      <nav className="nav">
        <aside className="brand-name">
          <span className="logo-name">SW</span>
        </aside>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn" > <a href="../../assets/CV.pdf" title="CV" download>Download CV</a></button>
      </nav>
      <section id="home">
      <main className="main-homepage">

      <article className="personal-info">
        <blockquote className="name">
          <p>
            Hello, <span className="cyan">I'm</span>{" "}
          </p>
          <h4 className="wordCarousel">
            <div>
              <ul className="flip">
                <li>Software Engineer</li>
                <li>Web Developer</li>
                <li>Coder</li>
                <li>Frontend Developer</li>
                <li>Sidra Waseem</li>
              </ul>
            </div>
          </h4>
        </blockquote>
        <div className="para reveal">
          <p>
            I am an ambitious and passionate developer whose everyday mission
            is to take a step further with her skills and learn new things.
            The enthusiasm I've for my work keeps me committed to
            self-development so I can achieve better results.
          </p>

          <p className="margin">
            However, there is a high probability this developer is still
            googling how to center a <code>div</code>.
          </p>
        </div>
        <button className="btn-desktop" > <a href="../../assets/CV.pdf" title="CV" download>Download CV</a></button>
      </article>
      <figure className="profile-figure reveal">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </figure>
      </main>
      <div className="socials-list reveal">
      <ul className="social">
      <li>Check Out My:</li>
        <li>
          <a href="h">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="h">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="h">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      </div>
      </section>
    </header>
  );
}

export default Home;
