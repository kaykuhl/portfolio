import React from "react";
import { Link } from "react-router-dom";
// import { Nav } from 'react-bootstrap'

function NavTabs() {
  return (
    <div className="jumbotron" style={{ height: 50 + "%", marginBottom: 0 + "px", paddingBottom: 0 + "px" }}>
      <h1>Kayla Ann Kuhlman</h1>
      <h3>Full-Stack Web Developer</h3>
      <a className="btn" href="mailto:kaylaannkuhlman@gmail.com" role="button">
        <img alt="email icon" src={"/portfolio/images/email.png"} style={{ width: 20 + "px" }} /> Email</a>
      <a className="btn" href="/portfolio/resume.pdf" target="_blank" role="button">
        <img alt="pdf icon" src={"/portfolio/images/pdf.png"} style={{ width: 20 + "px" }} /> Resume</a>
      <a className="btn" href="https://www.linkedin.com/in/kaykuhl/" target="_blank" role="button">
        <img alt="linkedin icon" src={"/portfolio/images/linked in.png"} style={{ width: 20 + "px" }} /> LinkedIn</a>
      <a className="btn" href="https://www.github.com/kaykuhl" target="_blank" role="button">
        <img alt="github icon" src={"/portfolio/images/githubicon.png"} style={{ width: 20 + "px" }} /> GitHub</a>

<hr></hr>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
        </Link>      </li>
            <li class="nav-item">
              <Link
                to="/skills"
                className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
              >
                Skills
        </Link>      </li>
            <li class="nav-item">
              <Link
                to="/about"
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                About
        </Link>      </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
