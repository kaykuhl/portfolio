import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavDropdown } from 'react-bootstrap'

function NavTabs() {
  return (
    <div className="jumbotron" style={{ height: 50 + "%", marginBottom: 0 + "px", paddingBottom: 0 + "px" }}>
      <h1>Kayla Ann Kuhlman</h1>
      <h3>Full-Stack Web Developer</h3>
      <a className="btn" href="mailto:kaylaannkuhlman@gmail.com" role="button">
        <img alt="email icon" src={"/images/email.png"} style={{ width: 20 + "px" }} /> Email</a>
      <a className="btn" href="https://www.linkedin.com/in/kaykuhl/" target="_blank" role="button">
        <img alt="linkedin icon" src={"/images/linked in.png"} style={{ width: 20 + "px" }} /> LinkedIn</a>
      <a className="btn" href="https://www.github.com/kaykuhl" target="_blank" role="button">
        <img alt="github icon" src={"/images/githubicon.png"} style={{ width: 20 + "px" }} /> GitHub</a>
      <a className="btn" href="https://www.instagram.com/blissfullycoding/" target="_blank" role="button">
        <img alt="github icon" src={"/images/ig.png"} style={{ width: 20 + "px" }} /> Instagram</a>
      <a className="btn" href="https://twitter.com/KaylaIsCoding" target="_blank" role="button">
        <img alt="github icon" src={"/images/twitter.png"} style={{ width: 20 + "px" }} /> Twitter</a>
    </div>

  );
}

export default NavTabs;
