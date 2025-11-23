import React from "react";
import bgImage from "../../../../src/assets/images/vision.png";
import Contact from "./Contact";

const RequestQuote = () => {
  return (
    <section>
      <div
        className="relative h-[60vh] w-full rounded-xl overflow-hidden "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay (optional) */}

        {/* Text */}
        <div className="relative z-10 h-full py-[60px]">
          <h1 className="text-white text-3xl md:text-4xl font-semibold text-center">
            Let’s Build Your Vision Together.
          </h1>
          <p className="text-center md:w-[800px] mx-auto py-[24px] text-white/80 px-3 md:px-0">
            We’d love to hear from you! Whether you’re ready to streamline your
            sourcing and logistics process or just want to learn more about how
            Vopromos can help your business our team is here to assist you.
          </p>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default RequestQuote;
