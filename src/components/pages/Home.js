import React from "react";
import "../../style.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Home() {
  return (
    <div className="container page-style">
            <hr />
      {/* Skills Section */}
      <div id="skills-text">
        <h2>Skills</h2>
        React <br />
        TypeScript < br />
        JavaScript <br />
        CSS <br />
        HTML <br />
        jQuery <br />
        API/AJAX Calls <br />
        Responsive Design <br />
        MongoDB <br />
        MySQL <br />
        Express <br />
        Node.js <br />
        Git <br />
        Deployment to Heroku <br />
        Deployment to Azure <br />
        NetSuite - SuiteFoundation Certified (Credential ID 16724)< br />
        Celigo - Integrator.io Level 4 Certified< br/>
        <br />
        <img
          src={"/images/html-icon.png"}
          style={{ width: 100 + "px" }}
          alt="HTML Icon"
        ></img>
        <img
          src={"/images/css-icon.png"}
          style={{ width: 100 + "px" }}
          alt="CSS Icon"
        ></img>
        <img
          src={"/images/js-icon.png"}
          style={{ width: 100 + "px" }}
          alt="JS Icon"
        ></img>
        <img
          src={"/images/react-icon.png"}
          style={{ width: 100 + "px" }}
          alt="React Icon"
        ></img>
        <img
          src={"/images/desktop-icon.png"}
          style={{ width: 100 + "px" }}
          alt="Desktop Icon"
        ></img>
        <img
          src={"/images/responsive-icon.png"}
          style={{ width: 100 + "px" }}
          alt=" Icon"
        ></img>
        <br />
        <br />
      </div>

      <hr />

      {/* Background Section */}
      <div id="background-text">
        <h2>Professional Background</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Present"
            iconStyle={{ background: "#F8EF7D", color: "#fff" }}
            icon={
              <i
                className="fa fa-2x fa-star"
                style={{ marginTop: 14 + "px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              BestBuy in Richfield, MN
            </h4>
            <p>
              Responsible for Front End Development on the ADAPT Team where I am
              developing with TypeScript and React to produce, maintain and
              modify the internal App Store for Best Buy.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2020 - April 2022"
            iconStyle={{ background: "gray", color: "#fff" }}
            icon={
              <i
                className="fa fa-2x fa-star"
                style={{ marginTop: 14 + "px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              ERP JavaScript Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              BerganKDV in Bloomington, MN
            </h4>
            <p>
              Responsible for creating software development and integration
              initiatives for our customers in their NetSuite ERP Systems
              utilizing SuiteScript 2.0, Workflows and Saved Searches. This also
              included building integrations between systems using REST and SOAP
              APIs.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2019 - March 2020"
            iconStyle={{ background: "gray", color: "#fff" }}
            icon={
              <i
                className="fa fa-2x fa-graduation-cap"
                style={{ marginTop: 14 + "px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              U of M Coding Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Attended Part Time U of M Trilogy Full-Stack Coding Bootcamp in
              St. Paul, MN
            </h4>
            <p>
              Learned the MERN stack and built applications using HTML5, CSS3,
              JavaScript, jQuery, Node. js, Responsive Design, Heroku, Git, User
              Authentication, React. js, MySQL, MongoDB, and more.{" "}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2018 - Present"
            iconStyle={{ background: "gray", color: "#fff" }}
            icon={
              <i
                className="fa fa-2x fa-building"
                style={{ marginTop: 14 + "px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Analytical Chemist II
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Minnesota Department of Transportation in Maplewood, MN
            </h4>
            <p>
              Highlights: Provided quality testing for the State of Minnesota
              and built short-term Access Databases for several labs for
              temporary use during lab results database transistion period.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2014 - November 2018"
            iconStyle={{ background: "gray", color: "#fff" }}
            icon={
              <i
                className="fa fa-2x fa-building"
                style={{ marginTop: 14 + "px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Quality Manager/Chemist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dyne Fire Protection Labs in Woodbury, MN
            </h4>
            <p>
              Highlights: Managed ISO 9001 Quality Management System for company
              of 12 employees, Used Access Database to query results and
              complete data analysis (R&R Studies), Set-Up New Testing Services,
              Led Management Review Meetings
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2010 - May 2014"
            iconStyle={{ background: "gray", color: "#fff" }}
            icon={
              <i
                className="fa fa-2x fa-graduation-cap"
                style={{ marginTop: 14 + "px" }}
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Winona State University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Obtained Bachelor's Degree in Chemistry at Winona State in Winona,
              MN
            </h4>
            <p>
              Research: “Targeting Molecules using Imprint Polymers on Magnetic
              Particles for Water Treatment" and I presented research at 2014
              ACS meeting in Dallas, Texas.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

<hr />

      {/* About Me Section */}
      <div className="contact-div">
        <h2>Contact</h2>
        <div className="contact-text">
          <p className="contact-links">
            Email: KaylaAnnKuhlman@gmail.com
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/kaykuhl/">
              https://www.linkedin.com/in/kaykuhl/
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/kaykuhl/">
              https://github.com/kaykuhl/
            </a>
            <br />
            Instagram:{" "}
            <a href="https://www.instagram.com/blissfullycoding/">
              https://www.instagram.com/blissfullycoding/
            </a>
            <br />
            Twitter:{" "}
            <a href="https://twitter.com/KaylaIsCoding">
              https://twitter.com/KaylaIsCoding
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
