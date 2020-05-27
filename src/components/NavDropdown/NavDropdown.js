import React from "react";

function NavDropdown({ data }) {

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Connect
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href={data.ghProfileURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
        <a className="dropdown-item" href={data.linkedInURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
        <a className="dropdown-item" href={"mailto:" + data.email}><i className="fas fa-envelope"></i> {data.email}</a>
        <a className="dropdown-item" href={"tel:+1" + data.phone}><i className="fas fa-phone"></i> {data.phoneDisplay}</a>
      </div>
    </li>

  );
}

export default NavDropdown;