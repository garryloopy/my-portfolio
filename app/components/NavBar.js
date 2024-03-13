"use client";

import Link from "next/link";

import { animateScroll, scroller } from "react-scroll";

export default function NavBar() {
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

  return (
    <header
      className="bg-zinc-950
      h-16 flex-row fixed top-0 w-full z-10"
    >
      <div className="flex justify-center items-center w-full h-full bg-zinc-900/45">
        <div className="flex flex-row  justify-between items-center w-[64rem] h-full">
          <button
            className="font-bold text-xl text-gray-50"
            onClick={handleScrollToTop}
          >
            Garry Jr Dayag
          </button>
          <div className="flex flex-row gap-4">
            <button
              className="font-medium text-lg text-gray-50"
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
      </div>
    </header>
  );
}
