import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg.js";
import ProjectDesc from "../ProjectDesc/ProjectDesc.js";

function Project({ data }) {

  return (
    <div className="row project my-5 mx-1">
      <ProjectImg reversed={data.reversed} screenshot={data.screenshot} name={data.name} />
      <ProjectDesc name={data.name} description={data.description} deployedURL={data.deployedURL} githubURL={data.githubURL} />
    </div>
  );
}

export default Project;