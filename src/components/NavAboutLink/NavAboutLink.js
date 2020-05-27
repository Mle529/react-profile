import React from "react";

function NavAboutLink(props) {

  return (
    <li id="about-me-item" className={(props.active === "true") ? "nav-item active" : "nav-item"}>
      <a id="about-me-link" className="nav-link" href="/">{(props.active === "true") ? <>About Me<span className='sr-only'>(current)</span></> : <>About Me</>}</a>
    </li>
  );
}

export default NavAboutLink;