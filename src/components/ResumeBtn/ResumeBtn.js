import React from "react";

function ResumeBtn(props) {

  return (
    <div className="d-inline"><a href={props.resume} target="_blank" rel="noopener noreferrer"><button className="btn btn-slate mr-2"><i className="fas fa-file"></i> Resume</button></a></div>
  );
}

export default ResumeBtn;