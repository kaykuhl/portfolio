import React from 'react'

const ProjectCard = (props) => {

    return(
      <div className="col-md-6">
      <div className="card">
        <h5>{props.title}</h5>
        <img src={props.imgURL} className="portfolio-image" alt={props.title}></img>
        <p>Description: {props.description}</p>
        <p><i>Skills Strengthened: {props.skills}</i></p>
        <p>{props.comments}</p>
        <a href={props.deployedURL} target="_blank" className="btn btn-primary portfolio-btn">View Project</a><a href={props.repoURL} target="_blank" className="btn btn-primary portfolio-btn">View Repo</a>
      </div>
      </div>
    )
}

export default ProjectCard