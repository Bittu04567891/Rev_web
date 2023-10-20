import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import About from "./About";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Contact from "./Contact";
import Client from "../components/client/Client";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Client />
    </>
  );
};

export default Home;
