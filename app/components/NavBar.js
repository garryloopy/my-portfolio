"use client";

import { IoMenu, IoClose } from "react-icons/io5";

import { motion } from "framer-motion";

import { animateScroll, scroller } from "react-scroll";

import { useState } from "react";

export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const scrollOptions = {
    duration: 800,
    delay: 100,
    smooth: true,
  };

  const handleScrollToTop = () => {
    animateScroll.scrollToTop(scrollOptions);
  };

  const handleScrollToAboutMe = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };

    scroller.scrollTo("aboutMeElement", newScrollOptions);
  };

  const handleScrollToEducation = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };

    scroller.scrollTo("educationElement", newScrollOptions);
  };

  const handleScrollToProjects = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };

    scroller.scrollTo("projectsElement", newScrollOptions);
  };

  const handleScrollToExperience = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };

    scroller.scrollTo("experienceElement", newScrollOptions);
  };

  const handleOnHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header
      className="bg-zinc-950
      h-16 fixed top-0 w-full z-10"
    >
      <div className="flex justify-center items-center w-full h-full bg-zinc-900/45 sm:px-4">
        <div className="sm:flex hidden flex-row justify-center sm:justify-between items-center w-full sm:w-[64rem] h-full">
          <button
            className="font-bold text-xl text-gray-50"
            onClick={handleScrollToTop}
          >
            Garry Jr Dayag
          </button>
          <div className="flex flex-row gap-4">
            <button
              className="font-medium text-lg text-gray-50 sm:hidden block"
              onClick={handleScrollToTop}
            >
              Home
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToAboutMe}
            >
              About me
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToEducation}
            >
              Education
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToExperience}
            >
              Experience
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToProjects}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="sm:hidden flex justify-center bg-zinc-900/45 w-full h-full">
          <div className="absolute top-2 right-2">
            {isHamburgerOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <IoClose
                  className=" text-gray-50 hover:cursor-pointer"
                  size={45}
                  onClick={handleOnHamburgerClick}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <IoMenu
                  className=" text-gray-50 hover:cursor-pointer"
                  size={45}
                  onClick={handleOnHamburgerClick}
                />
              </motion.div>
            )}
          </div>
          {isHamburgerOpen && (
            <div className=" relative inset-y-16 w-full h-fit bg-zinc-950">
              <div className=" flex flex-col items-center justify-center bg-zinc-800/45 divide-y shadow-md divide-zinc-700 border-y border-zinc-700 h-fit w-full">
                <button
                  className="font-medium text-lg text-gray-50 w-full h-full py-3"
                  onClick={handleScrollToTop}
                >
                  Home
                </button>
                <button
                  className="font-medium text-lg text-gray-50 w-full h-full py-3"
                  onClick={handleScrollToAboutMe}
                >
                  About me
                </button>
                <button
                  className="font-medium text-lg text-gray-50 w-full h-full py-3"
                  onClick={handleScrollToEducation}
                >
                  Education
                </button>
                <button
                  className="font-medium text-lg text-gray-50 w-full h-full py-3"
                  onClick={handleScrollToExperience}
                >
                  Experience
                </button>
                <button
                  className="font-medium text-lg text-gray-50 w-full h-full py-3"
                  onClick={handleScrollToProjects}
                >
                  Projects
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
