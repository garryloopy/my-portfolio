import { useAnimate } from "framer-motion";

import { useState, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function ShowcaseContainer({ children }) {
  const [scope, animate] = useAnimate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = 4;
  const slideAmount = 992;

  const slideShowTypes = {
    left: -slideAmount,
    right: slideAmount,
    start: 0,
    end: -slideAmount * (slideLength - 1),
  };

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
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
        { duration: 1, ease: "easeInOut" }
      );
    };

    const intervalId = setInterval(() => {
      handleOnDirectionClick("RIGHT");
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentSlide, animate, scope, slideShowTypes.left, slideShowTypes.start]);

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
      { duration: 1, ease: "easeInOut" }
    );
  };

  return (
    <div className="relative rounded-xl w-[full] h-[32rem] overflow-hidden hidden lg:block ">
      <div ref={scope} className="flex flex-row h-full">
        {children}
      </div>

      <div className="absolute flex items-center justify-center top-0 left-0 w-[8rem] h-full group">
        <FaAngleLeft
          size={40}
          className="text-gray-50 hover:cursor-pointer opacity-50 group-hover:opacity-100 transition-opacity"
          onClick={() => handleOnDirectionClick("LEFT")}
        />
      </div>
      <div className="absolute flex items-center justify-center top-0 right-0 w-[8rem] h-full group">
        <FaAngleRight
          size={40}
          className="text-gray-50 hover:cursor-pointer opacity-50 group-hover:opacity-100 transition-opacity"
          onClick={() => handleOnDirectionClick("RIGHT")}
        />
      </div>
    </div>
  );
}
