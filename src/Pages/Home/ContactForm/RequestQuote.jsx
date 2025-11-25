import React from "react";
import bgImage from "../../../../src/assets/images/vision.png";
import Contact from "./Contact";

const RequestQuote = () => {
  return (
    <section id="quote">
      <div
        className="relative md:h-[60vh] h-[50vh] w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
        <div className="absolute inset-0 bg-black/40 dark:hidden" />

      
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-[#6941C6]/50 to-[#020202]/90" />

        <div className="relative z-10 md:h-full md:py-[60px] flex flex-col md:justify-start items-center text-center px-4">
          <h1 className="text-white  text-3xl md:text-4xl font-semibold pt-20 md:pt-0">
            Let’s Build Your Vision Together.
          </h1>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default RequestQuote;
