import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyJoin from "../components/WhyJoin";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import HowToJoin from "../components/HowToJoin";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyJoin />
      <Events />
      <Testimonials />
      <HowToJoin />
      <Contact />
    </div>
  );
};

export default Home;
