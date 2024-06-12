import React, { useEffect } from "react";
import aboutImg from "../assets/fatherSon.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about" className="w-full pt-24 bg-gray-100 p-4">
      <div className="mx-auto flex flex-col justify-center items-center text-center gap-14">
        <div className="md:w-full">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-6">
            About Optimus Community Programs
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At Optimus Community Programs, we are dedicated to providing
            exceptional care and support for individuals with intellectual and
            developmental disabilities. Our mission is to empower our community
            members through comprehensive behavioral health services, fostering
            independence, growth, and a higher quality of life.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team of experienced professionals is committed to creating a
            safe, nurturing environment where each individual can thrive. We
            offer a range of programs and activities tailored to meet the unique
            needs of our clients, ensuring they receive the best possible care
            and support.
          </p>
          <p className="text-lg text-gray-700">
            Join us on our mission to make a positive impact in the lives of
            those we serve. Together, we can create a brighter future for
            everyone in our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
