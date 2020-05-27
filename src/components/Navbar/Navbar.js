import React from "react";
import NavToggler from "../NavToggler/NavToggler.js";
import NavAboutLink from "../NavAboutLink/NavAboutLink.js";
import NavPortfolioLink from "../NavPortfolioLink/NavPortfolioLink.js";
import NavDropdown from "../NavDropdown/NavDropdown.js";

function Navbar(props) {

  const data = require("../../data/navbar-data.js");

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-slate">
      <div className="container-lg">
        <a className="navbar-brand" href="/">Michael Le</a>
        <NavToggler />
        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav ml-auto">
            <NavAboutLink active={(props.active === "about") ? "true" : "false"} />
            <NavPortfolioLink active={(props.active === "portfolio") ? "true" : "false"} />
            <NavDropdown data={data} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;