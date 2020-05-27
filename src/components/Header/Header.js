import React from "react";
import Banner from "../Banner/Banner.js";
import Navbar from "../Navbar/Navbar.js";

function Header(props) {

  return (
    <header>
      <Banner />
      <Navbar active={props.active}/>
    </header>
  );
}

export default Header;