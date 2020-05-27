import React from "react";

function NavPortfolioLink(props) {

  return (
    <li id="portfolio-item" className={(props.active === "true") ? "nav-item active" : "nav-item"}>
      <a id="portfolio-link" className="nav-link" href="/portfolio">{(props.active === "true") ? <>Portfolio<span className='sr-only'>(current)</span></> : <>Portfolio</>}</a>
    </li>
  );
}

export default NavPortfolioLink;