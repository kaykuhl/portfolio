import React from "react";
import '../../style.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




function Skills() {


    return (

        <div className="container">
            <div id="about-me-text">

                <h2>Skills</h2>
                HTML <br />
                JavaScript <br />
                CSS <br />
                jQuery <br />
                API/AJAX Calls <br />
                Responsive Design <br />
                MongoDB <br />
                MySQL <br />
                Express <br />
                Node.js <br />
                React <br />
                Git <br />
                Heroku <br />

                <img src={"/portfolio/images/html-icon.png"} style={{ width: 100 + "px" }}></img>
                <img src={"/portfolio/images/css-icon.png"} style={{ width: 100 + "px" }}></img>
                <img src={"/portfolio/images/js-icon.png"} style={{ width: 100 + "px" }}></img>
                <img src={"/portfolio/images/react-icon.png"} style={{ width: 100 + "px" }}></img>
                <img src={"/portfolio/images/desktop-icon.png"} style={{ width: 100 + "px" }}></img>
                <img src={"/portfolio/images/responsive-icon.png"} style={{ width: 100 + "px" }}></img>

                <br></br>
                <hr></hr>
                <h2>Professional Background</h2>


                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Today"
                        iconStyle={{ background: 'lightsalmon', color: '#fff' }}
                        icon={<i className="fa fa-2x fa-star" style={{ marginTop: 7 + "px" }}></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Open to Opportunities</h3>
                        <h4 className="vertical-timeline-element-subtitle">Looking for a job in Web Development!</h4>
                        <p></p>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="September 2019 - March 2020"
                        iconStyle={{ background: 'gray', color: '#fff' }}
                        icon={<i className="fa fa-2x fa-graduation-cap" style={{ marginTop: 7 + "px" }}></i>}
                    >
                        <h3 className="vertical-timeline-element-title">U of M Coding Bootcamp</h3>
                        <h4 className="vertical-timeline-element-subtitle">Attended Part Time U of M Trilogy Full-Stack Coding Bootcamp in St. Paul, MN</h4>
                        <p>
                            Learned the MERN stack and built applications using HTML5, CSS3, JavaScript, jQuery, Node. js,
                            Responsive Design, Heroku, Git, User Authentication, React. js, MySQL, MongoDB, and more.    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="November 2018 - Present"
                        iconStyle={{ background: 'gray', color: '#fff' }}
                        icon={<i className="fa fa-2x fa-building" style={{ marginTop: 7 + "px" }}></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Analytical Chemist II</h3>
                        <h4 className="vertical-timeline-element-subtitle">Minnesota Department of Transportation in Maplewood, MN</h4>
                        <p>
                            Highlights: Provided quality testing for the State of Minnesota and built short-term Access Databases for
                            several labs for temporary use during lab results database transistion period.
    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2014 - November 2018"
                        iconStyle={{ background: 'gray', color: '#fff' }}
                        icon={<i className="fa fa-2x fa-building" style={{ marginTop: 7 + "px" }}></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Quality Manager/Chemist</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dyne Fire Protection Labs in Woodbury, MN</h4>
                        <p>
                            Highlights: Managed ISO 9001 Quality Management System for company of 12 employees, Used Access Database to query results and complete data analysis (R&R Studies), Set-Up New Testing Services, Led Management Review Meetings
    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2010 - May 2014"
                        iconStyle={{ background: 'gray', color: '#fff' }}
                        icon={<i className="fa fa-2x fa-graduation-cap" style={{ marginTop: 7 + "px" }}></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Winona State University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Obtained Bachelor's Degree in Chemistry at Winona State in Winona, MN</h4>
                        <p>
                            Research: “Targeting Molecules using Imprint Polymers on Magnetic Particles for Water Treatment" and I presented research at 2014 ACS meeting in Dallas, Texas.
    </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>

        </div>
    );
}

export default Skills;
