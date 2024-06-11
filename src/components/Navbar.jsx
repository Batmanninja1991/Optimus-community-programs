import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="w-full h-[80px] bg-primary flex items-center text-center justify-between px-4 md:px-8 shadow-lg z-50 fixed top-0">
      <div className="abril text-white text-2xl">
        Optimus
        <br />
        Community Programs
      </div>
      <div className="md:hidden" onClick={handleClick}>
        {openMenu ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>
      <ul className="hidden md:flex gap-4 text-white">
        <li className="hover:text-accent hover:underline">
          <a href="#" onClick={handleCloseMenu}>
            Home
          </a>
        </li>
        <li className="hover:text-accent hover:underline">
          <a href="#about" onClick={handleCloseMenu}>
            About Us
          </a>
        </li>
        <li className="hover:text-accent hover:underline">
          <a href="#programs" onClick={handleCloseMenu}>
            Programs
          </a>
        </li>
        <li className="hover:text-accent hover:underline">
          <a href="#activities" onClick={handleCloseMenu}>
            Activities
          </a>
        </li>
        <li className="hover:text-accent hover:underline">
          <a to="#contact" onClick={handleCloseMenu}>
            Contact
          </a>
        </li>
      </ul>
      <button className="hidden md:block bg-accent text-primary py-2 px-4 rounded hover:bg-accent-dark transition-all duration-200">
        Get Started
      </button>
      {openMenu && (
        <div className="absolute top-[80px] right-0 w-full bg-primary border-black border-t border-b-2 flex flex-col text-[24px] items-center md:hidden menuSlideIn">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-accent hover:underline">
              <a href="#" onClick={handleCloseMenu}>
                Home
              </a>
            </li>
            <li className="hover:text-accent hover:underline">
              <a to="#about" onClick={handleCloseMenu}>
                About Us
              </a>
            </li>
            <li className="hover:text-accent hover:underline">
              <a href="#programs" onClick={handleCloseMenu}>
                Programs
              </a>
            </li>
            <li className="hover:text-accent hover:underline">
              <a href="#activities" onClick={handleCloseMenu}>
                Activities
              </a>
            </li>
            <li className="hover:text-accent hover:underline">
              <a href="#contact" onClick={handleCloseMenu}>
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-accent-dark text-primary-dark py-4 px-4 rounded mb-10 hover:bg-accent transition-all duration-200">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
