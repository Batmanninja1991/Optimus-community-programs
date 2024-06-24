import React from "react";
import logo from "../assets/OPTIMUS Community Programs-5.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="flex flex-row justify-between items-center p-6">
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-[200px] rounded" />
        </div>
        <div className="flex flex-col xl:flex-row items-center md:items-start gap-4 md:gap-8 xl:gap-16 w-full md:w-auto mb-4 md:mb-0 pl-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61560887934903"
          >
            <FaFacebook
              size={50}
              className="text-white transition-all hover:scale-125"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/erick-ruiz-772708312/?"
          >
            <FaLinkedin
              size={50}
              className="text-white transition-all hover:scale-125"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:OptimusCommunityPrograms@gmail.com"
          >
            <AiOutlineMail
              size={50}
              className="text-white transition-all hover:scale-125"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full md:w-auto">
          <ul className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 px-4">
            <li className="hover:text-accent hover:underline md:px-10 lg:text-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-accent hover:underline md:px-10 lg:text-xl">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-accent hover:underline md:px-10 lg:text-xl">
              <Link to="/programs">Programs</Link>
            </li>
            <li className="hover:text-accent hover:underline md:px-10 lg:text-xl">
              <Link to="/activities">Activities</Link>
            </li>
            <li className="hover:text-accent hover:underline md:px-10 lg:text-xl">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-right pr-20">
        <p className="text-sm md:text-base">
          &copy; 2024 Optimus Community Programs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
