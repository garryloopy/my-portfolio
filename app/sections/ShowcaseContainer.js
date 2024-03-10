import { useAnimate } from "framer-motion";

import { useState, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function ShowcaseContainer({ children }) {
  const [scope, animate] = useAnimate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = 4;
  const slideAmount = 1024;

  const slideShowTypes = {
    left: -slideAmount,
    right: slideAmount,
    start: 0,
    end: -slideAmount * (slideLength - 1),
  };

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleOnDirectionClick("RIGHT");
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleOnDirectionClick = (direction) => {
    let newSlide;

    if (direction === "RIGHT") {
      newSlide = currentSlide < slideLength ? currentSlide + 1 : 1;
    } else {
      newSlide = currentSlide > 1 ? currentSlide - 1 : slideLength;
    }

    setCurrentSlide(newSlide);

    const newX =
      newSlide < slideLength
        ? slideShowTypes.left * newSlide
        : slideShowTypes.start;

    animate(
      scope.current,
      {
        x: newX,
      },
      { duration: 0.75, ease: "easeInOut" }
    );
  };
  return (
    <div className="relative rounded-xl w-[full] h-[32rem] overflow-hidden">
      <div ref={scope} className="flex flex-row h-full">
        {children}
      </div>

      <div className="absolute flex items-center justify-center top-0 left-0 w-[8rem] h-full">
        <FaAngleLeft
          size={40}
          className="text-white hover:cursor-pointer"
          onClick={() => handleOnDirectionClick("LEFT")}
        />
      </div>
      <div className="absolute flex items-center justify-center top-0 right-0 w-[8rem] h-full">
        <FaAngleRight
          size={40}
          className="text-white hover:cursor-pointer"
          onClick={() => handleOnDirectionClick("RIGHT")}
        />
      </div>
    </div>
  );
}
