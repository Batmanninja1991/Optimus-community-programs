import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowUp,
} from "react-icons/ai";
import Modal from "./Modal";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-[80px] bg-primary flex items-center text-center justify-between px-4 md:px-8 shadow-lg z-50 fixed top-0">
      <div className="abril text-white text-2xl">
        Optimus
        <br />
        Community Programs
      </div>
      <a href="#">
        <div className="fixed bottom-0 right-0 bg-primary-dark w-18 h-18 flex flex-col justify-center items-center p-3">
          <AiOutlineArrowUp size={30} className="text-white" />
        </div>
      </a>
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
          <a href="#contact" onClick={handleCloseMenu}>
            Contact
          </a>
        </li>
      </ul>
      <button
        className="hidden md:block bg-accent text-primary py-2 px-4 rounded hover:bg-accent-dark transition-all duration-200"
        onClick={handleGetStarted}
      >
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
              <a href="#contact" onClick={handleCloseMenu}>
                Contact
              </a>
            </li>
          </ul>
          <button
            className="bg-accent-dark text-primary-dark py-4 px-4 rounded mb-10 hover:bg-accent transition-all duration-200"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
