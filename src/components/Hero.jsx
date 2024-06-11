import React from "react";
import heroImg from "../assets/coupleSitting.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Hero = () => {
  return (
    <div
      className="w-full pt-24 flex flex-col px-2"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div
        className="bg-center bg-cover min-h-[550px] rounded"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="flex flex-col justify-center text-right gap-2 p-4 md:gap-4 md:pr-4 lg:pt-10">
          <h1 className="abril text-4xl md:text-5xl text-primary">
            Optimus
            <br className="lg:hidden" /> Community
            <br className="md:hidden" /> Programs
          </h1>
          <p className="lato md:text-lg text-text">
            Empowering Lives
            <br className="lg:hidden" /> Through Specialized{" "}
            <br className="md:hidden" />
            Behavioral Health Services
          </p>
        </div>
      </div>
      <button className="bg-accent-dark text-xl font-bold text-primary-dark tracking-widest p-6 rounded mt-2 mb-10 hover:bg-accent transition-all duration-200">
        Get Help Today
      </button>
    </div>
  );
};

export default Hero;
