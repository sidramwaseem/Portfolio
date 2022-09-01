import React from "react";
import "./Home.css";
import profileImg from "../../assets/profile-img.jpg";

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
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="search-box">
          <button class="btn-search">
            <i class="fas fa-search"></i>
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </nav>
      <section id="home">
        <aside className="social responsive-social">
          <ul>
            <li>
              <a
                href="https://twitter.com/sidramwaseem"
                target="_blank"
                rel="noreferrer"
              >
                Twitter <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sidramwaseem"
                target="_blank"
                rel="noreferrer"
              >
                Github <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sidramwaseem/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </aside>

        <article className="personal-info">
          <blockquote className="name">
            <p>
              Hello, <span className="cyan">I'm</span>{" "}
            </p>
            <h4 className="wordCarousel">
              <div>
                <ul className="flip">
                  <li>Mentee</li>
                  <li>Web Developer</li>
                  <li>Coder</li>
                  <li>Frontend Developer</li>
                  <li>Sidra Waseem</li>
                </ul>
              </div>
            </h4>
          </blockquote>
          <div className="para">
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
          <button className="btn">Download CV</button>
        </article>
        <figure className="profile-figure">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </figure>
      </section>
    </header>
  );
}

export default Home;
