import React from "react";

function ProjectImg(props) {

  return (
    <div className={(props.reversed) ? "col-lg-8 px-0 order-lg-last" : "col-lg-8 px-0"}>
      <div className="image-shadow">
        <img src={props.screenshot} alt={"Screenshot of " + props.name} className="img-responsive" />
      </div>
    </div>
  );
}

export default ProjectImg;






