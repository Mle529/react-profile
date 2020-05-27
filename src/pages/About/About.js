import React from "react";
import Header from "../../components/Header/Header.js";
import AboutContent from "../../components/AboutContent/AboutContent.js";
import Footer from "../../components/Footer/Footer.js";

function About() {

  return (
    <>
      <div className="content">
        <Header active="about"/>
        <AboutContent />
      </div>
      <Footer />
    </>
  );
}

export default About;