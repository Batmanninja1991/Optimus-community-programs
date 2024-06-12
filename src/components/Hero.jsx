import React from "react";
import heroImg from "../assets/coupleSitting.jpg";
import missionImg from "../assets/friendsGroup.jpg";
import servicesImg from "../assets/holdingHands.jpg";

const Hero = () => {
  return (
    <div className="w-full pt-24 flex flex-col p-2">
      {/* Hero Section */}
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

      {/* Mission Statement Section */}
      <div className="w-full py-12 flex flex-col items-center bg-gray-100">
        <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8 px-4">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="abril text-3xl md:text-4xl text-primary mb-4">
              Our Mission
            </h2>
            <p className="lato text-lg text-gray-700">
              At Optimus Community Programs, our mission is to provide
              exceptional care and support to individuals with intellectual and
              developmental disabilities. We strive to foster independence,
              growth, and a higher quality of life through comprehensive
              behavioral health services.
            </p>
          </div>
        </div>
      </div>

      {/* Key Services Section */}
      <div className="w-full p-12 flex flex-col items-center bg-white">
        <div className="max-w-4xl flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={servicesImg}
            alt="Services"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="abril text-3xl md:text-4xl text-primary mb-4">
              Our Services
            </h2>
            <ul className="lato text-lg text-gray-700 list-disc list-inside">
              <li>Residential Services</li>
              <li>Day Programs</li>
              <li>Behavioral Support</li>
              <li>Recreational Activities</li>
              <li>Educational Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
