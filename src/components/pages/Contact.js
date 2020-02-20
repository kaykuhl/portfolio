import React from "react";
import '../../style.css';
import emailimg from "../../images/email.png";
import phoneimg from "../../images/phone.png";
import pdfimg from "../../images/pdf.png";
import lnimg from "../images/linked in.png";
import ghimg from "../../images/githubicon.png";
import resume from "../../resume.pdf"

function Contact(props) {
    return (
        <div className="index-background">
                <div className="contact-links">
                <h2>Contact</h2>
                    <a className="btn" href="mailto:kaylaannkuhlman@gmail.com" role="button">
                        <img alt="email icon" src={emailimg} style={{ width: 20 + "px" }} /> KaylaAnnKuhlman@gmail.com</a>
                    <br />
                    <a className="btn" href="tel:612-720-4675" role="button">
                        <img alt="phone icon" src={phoneimg} style={{ width: 20 + "px" }} /> 612-720-4675</a>
                    <br />
                    <a className="btn" href={resume} target="_blank" role="button">
                        <img alt="pdf icon" src={pdfimg} style={{ width: 20 + "px" }} /> Resume</a>
                    <br />
                    <a className="btn" href="https://www.linkedin.com/in/kaykuhl/" target="_blank" role="button">
                        <img alt="linkedin icon" src={lnimg} style={{ width: 20 + "px" }} /> linkedin.com/in/kaykuhl</a>
                    <br />
                    <a className="btn" href="https://www.github.com/kaykuhl" target="_blank" role="button">
                        <img alt="github icon" src={ghimg} style={{ width: 20 + "px" }} /> github.com/kaykuhl</a>
                </div>
        </div>
    );
}

export default Contact;
