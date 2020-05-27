import React from "react";

function ProjectDesc(props) {

  return (
    <div className="project-desc col-lg-4">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href={props.deployedURL} target="_blank" rel="noopener noreferrer"><button className="btn btn-slate btn-lg mr-2">Try It!</button></a>
      <a href={props.githubURL} target="_blank" rel="noopener noreferrer"><button className="btn btn-slate btn-lg mr-2"><i className="fab fa-github"></i></button></a>
    </div>
  );
}

export default ProjectDesc;