import React from "react";
import Slider from "../components/slider/Slider";
import About from "./About";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Contact from "./Contact";
import Client from "../components/client/Client";
import Gallery from "../components/gallery/Gallery";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Portfolio />
      <Gallery />
      <Services />
      <Contact />
      <Client />
    </>
  );
};

export default Home;
