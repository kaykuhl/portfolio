import React from "react";
import '../../style.css';
import ProjectCard from "../cards/projectCard";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Home() {

  return (
    <div>
    <div id="portfolio-text">
      <h2>Portfolio</h2>
      <div className="container">
        <div className="row">
          <ProjectCard
            title="Nuggets"
            imgURL="/images/nuggets.jpg"
            description="Tool for parents/caretakers and children to manage chores and transactions."
            skills="React, mySQL, Authentication, Heroku Deployment"
            comments="Group Project #3 for the U of M Coding Bootcamp - Contributions: JavaScript Logic, API/AJAX Calls, Back-end Development, mySQL Database Schema, Heroku Deployment, Helped with CSS"
            deployedURL="https://nuggets-2020.herokuapp.com/"
            repoURL="https://github.com/kaykuhl/nuggets"
          />

          <ProjectCard
            title="Pika-Choose!"
            imgURL="/images/pokemon.jpg"
            description="Works as a team builder for Pokemon teams using a mySQL database."
            skills="mySQL, Handlebars, Heroku Deployment"
            comments="Group Project #2 for the U of M Coding Bootcamp - Contributions: Frontend development (HTML, JS, CSS), Handlebars, Heroku Deployment, Design"
            deployedURL="https://protected-spire-30180.herokuapp.com/"
            repoURL="https://github.com/ZanderMate/teamikea"
          />


        </div><div className="row">
          <ProjectCard
            title="Global Eats"
            imgURL="/images/project.png"
            description="Food and drink recipe generator based on user selection"
            skills="API/AJAX calls, Github Conflict Resolution"
            comments="Group Project #1 for the U of M Coding Bootcamp - Contributions: Backend development, javaScript, Design"
            deployedURL="https://kaykuhl.github.io/project-1/html"
            repoURL="https://github.com/kaykuhl/project-1"
          />
                    <ProjectCard
            title="Weather Dashboard"
            imgURL="/images/weather-dashbaord.png"
            description="Displays the current weather and 5-day forecast of a searched city"
            skills="API/AJAX Calls, On-click Events, Local Storage"
            comments="Assignment part of the U of M Coding Bootcamp"
            deployedURL="https://kaykuhl.github.io/06-weather-dashboard"
            repoURL="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/06-weather-dashboard"
          />

        </div><div className="row">

          <ProjectCard
            title="Quiz Game"
            imgURL="/images/quiz-game.png"
            description="Quiz game that scores points based on correct answers and time remaining"
            skills="Timer (Interval) function, On-click Events"
            comments="Assignment part of the U of M Coding Bootcamp"
            deployedURL="https://kaykuhl.github.io/04-quiz-game"
            repoURL="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/04-quiz-game"
          />
        </div>
    </div>
    </div>






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

    <img src={"/images/html-icon.png"} style={{ width: 100 + "px" }}></img>
    <img src={"/images/css-icon.png"} style={{ width: 100 + "px" }}></img>
    <img src={"/images/js-icon.png"} style={{ width: 100 + "px" }}></img>
    <img src={"/images/react-icon.png"} style={{ width: 100 + "px" }}></img>
    <img src={"/images/desktop-icon.png"} style={{ width: 100 + "px" }}></img>
    <img src={"/images/responsive-icon.png"} style={{ width: 100 + "px" }}></img>

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


<div className="container">
<div id="about-me-text">
    <h2>About Me</h2>
    <p>Hi, thank you for clicking on my About Me Page! Let me introduce myself, I'm Kayla Kuhlman. 
        I am a full-stack web developer new to the field and a Native Minnesotan who has a lot of 
        passion and curiosity for technology. </p>
    <p>
        After graduating with a BS in Chemistry from Winona State University in 2014 and holding successful roles as an 
        analytical chemist and quality manager, I found a lot of passion in making changes to the laboratory databases and updating 
        documentation.  I have self-taught skills in building access databases and have been able to work with the IT departments 
        in my previous positions. When I started looking into coding languages such as JavaScript, I was blown away by the 
        possibilities.
</p>
    <p>
        In 2019, I decided to turn this passion into my career and enrolled in the U of M coding bootcamp and have been learning 
        full-stack web development.  I had a great experience doing weekly assignments (Average grade of "A") as well as 
        three group projects where I took on various roles.  I have a lot of drive to continue learning and to grow in the tech 
        field and I'm excited to see what 2020 has in store for me.</p>
    <p>
            When I am not coding, I enjoy listening to podcasts, traveling and trying new food, rock climbing, playing board games, and hanging out with my Siberian cat, Kronk.
</p><p>
        <img src={"/images/me.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
        <img src={"/images/travel-headshot.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
        <img src={"/images/headshot.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
        <img src={"/images/travel.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
        <img src={"/images/kronk.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
    </p>
</div>

</div>
</div>


  );
}

export default Home;
