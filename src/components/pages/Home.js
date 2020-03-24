import React from "react";
import '../../style.css';
import ProjectCard from "../cards/projectCard"

function Home() {

  return (
    <div id="portfolio-text">
      <h2>Portfolio</h2>
      <div className="container">
        <div className="row">
          <ProjectCard
            title="Nuggets"
            imgURL="/portfolio/images/nuggets.jpg"
            description="Tool for parents/caretakers and children to manage chores and transactions."
            skills="React, mySQL, Authentication, Heroku Deployment"
            comments="Group Project #3 for the U of M Coding Bootcamp - Contributions: JavaScript Logic, API/AJAX Calls, Back-end Development, mySQL Database Schema, Heroku Deployment, Helped with CSS"
            deployedURL="https://nuggets-2020.herokuapp.com/"
            repoURL="https://github.com/kaykuhl/nuggets"
          />

          <ProjectCard
            title="Travel Ideas"
            imgURL="/portfolio/images/travel-app.jpg"
            description="PWA Tool to track travel itineraries."
            skills="Angular, Ionic Framwork, Firebase, PWAs"
            comments="Personal Project - Built to gain experience with Ionic Angular Frameworks."
            deployedURL="https://travelideas-b8f56.firebaseapp.com/home"
            repoURL="https://github.com/kaykuhl/travel-ideas"
          />
        </div><div className="row">
          <ProjectCard
            title="Pika-Choose!"
            imgURL="/portfolio/images/pokemon.jpg"
            description="Works as a team builder for Pokemon teams using a mySQL database."
            skills="mySQL, Handlebars, Heroku Deployment"
            comments="Group Project #2 for the U of M Coding Bootcamp - Contributions: Frontend development (HTML, JS, CSS), Handlebars, Heroku Deployment, Design"
            deployedURL="https://protected-spire-30180.herokuapp.com/"
            repoURL="https://github.com/ZanderMate/teamikea"
          />

          <ProjectCard
            title="Global Eats"
            imgURL="/portfolio/images/project.png"
            description="Food and drink recipe generator based on user selection"
            skills="API/AJAX calls, Github Conflict Resolution"
            comments="Group Project #1 for the U of M Coding Bootcamp - Contributions: Backend development, javaScript, Design"
            deployedURL="https://kaykuhl.github.io/project-1/html"
            repoURL="https://github.com/kaykuhl/project-1"
          />
        </div><div className="row">
          <ProjectCard
            title="React Employee Search Application"
            imgURL="/portfolio/images/employee-search.jpg"
            description="Allows users to both sort and filter a list of employees using React.js components."
            skills="React, Firebase Deployment"
            comments="Assignment part of the U of M Coding Bootcamp"
            deployedURL="https://employee-react-app.firebaseapp.com/"
            repoURL="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/16-react-employee-search"
          />

          <ProjectCard
            title="Weather Dashboard"
            imgURL="/portfolio/images/weather-dashbaord.png"
            description="Displays the current weather and 5-day forecast of a searched city"
            skills="API/AJAX Calls, On-click Events, Local Storage"
            comments="Assignment part of the U of M Coding Bootcamp"
            deployedURL="https://kaykuhl.github.io/06-weather-dashboard"
            repoURL="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/06-weather-dashboard"
          />

        </div><div className="row">
          <ProjectCard
            title="Quiz Game"
            imgURL="/portfolio/images/quiz-game.png"
            description="Quiz game that scores points based on correct answers and time remaining"
            skills="Timer (Interval) function, On-click Events"
            comments="Assignment part of the U of M Coding Bootcamp"
            deployedURL="https://kaykuhl.github.io/04-quiz-game"
            repoURL="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/04-quiz-game"
          />
        </div></div>
    </div>
  );
}

export default Home;
