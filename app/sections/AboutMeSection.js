import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../layouts/SectionLayout";

import { IoCaretForwardSharp } from "react-icons/io5";

import { motion, useInView } from "framer-motion";

import Image from "next/image";
import SaitLogo from "@/public/images/logo-sait-vertical.png";

import { useRef, useEffect } from "react";

/**
 * Represents the about me section
 * @returns About me section
 */
export default function AboutMeSection({ onContactClick }) {
  const refOptions = {
    once: true,
  };

  const techRef = useRef(null);
  const techIsInView = useInView(techRef, refOptions);

  const imageRef = useRef(null);
  const imageIsInView = useInView(imageRef, refOptions);

  // The technologies
  const TECHNOLOGIES = [
    "Javascript ES6+",
    "Typescript",
    "React JS",
    "Java",
    "Python",
    "React Native",
    "C#",
    "Firebase",
  ];

  /**
   * Represents an item component to be used within the sum of technologies section
   * @param {String} param0 The item to print out
   * @returns An item component
   */
  const Item = ({ children, variants, custom }) => {
    return (
      <motion.div
        className="flex flex-row items-center"
        variants={variants}
        custom={custom}
      >
        <IoCaretForwardSharp className="text-gray-400" />
        <p className="text-gray-400 font-normal text-lg">{children}</p>
      </motion.div>
    );
  };

  const parent = {
    visible: {},
    hidden: {},
  };
  const child = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 1,
      },
    }),
    hidden: { opacity: 0, x: -100 },
  };

  const image = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <SectionLayout>
      <SectionHeader>About Me</SectionHeader>
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col gap-8">
          <p className="text-gray-400 font-normal text-lg">
            Im a current student at{" "}
            <span className="text-red-700 font-bold text-xl">
              Southern Alberta Institute of Technology
            </span>
            , Software Development diploma. Proficient in C#, Java, Python, and
            more. I specialize in React, React Native, Typescript, Javascript,
            Firebase, and game development using Unity.
          </p>

          <div className="flex flex-col gap-1 w-fit">
            <p className="text-gray-400 font-normal text-lg">
              A sum of the technologies that Ive been working with:
            </p>
            <motion.div
              className="grid grid-cols-3 w-full gap-1"
              ref={techRef}
              initial="hidden"
              animate={techIsInView ? "visible" : "hidden"}
              variants={parent}
            >
              {TECHNOLOGIES.map((technology, i) => (
                <Item key={technology} variants={child} custom={i}>
                  {technology}
                </Item>
              ))}
            </motion.div>
          </div>

          <p className="text-gray-400 font-normal text-lg">
            In addition to coding, I also do game development with C# with Unity
            on my spare time while expanding my interest into C++ with Unreal
            Engine.
          </p>
        </div>

        <motion.div
          className="hidden lg:block"
          variants={image}
          initial="hidden"
          animate={imageIsInView ? "visible" : "hidden"}
          ref={imageRef}
        >
          <Image src={SaitLogo} width={400} height={400} alt="Sait logo" />
        </motion.div>
      </div>
    </SectionLayout>
  );
}
