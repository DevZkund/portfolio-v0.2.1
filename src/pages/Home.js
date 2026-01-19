import React from "react";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Portfolio />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
