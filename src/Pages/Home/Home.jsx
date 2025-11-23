import React from "react";
import Banner from "./Banner/Banner";
import { AboutUs } from "./About/AboutUs";
import OurProjects from "./Products/Products";
import Testimonials from "./Testimonial/Testimonial";
import RequestQuote from "./ContactForm/RequestQuote";

const Home = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Banner />
      <AboutUs />
      <OurProjects />
      <Testimonials />
      <RequestQuote />
    </div>
  );
};

export default Home;
