import React from "react";

function Headshot(props) {

  return (
    <div className="image-shadow">
      <img src={props.photo} alt="Headshot" className="img-responsive" />
    </div>
  );
}

export default Headshot;