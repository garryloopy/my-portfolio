const GITHUB_URL = "https://github.com/garryloopy";
const LINKEDIN_URL = "https://www.linkedin.com/in/garry-jr-dayag-444258203/";

import { IoLogoGithub, IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

import { motion } from "framer-motion";

/**
 * Represents the landing section of the main page.
 * @returns A landing section component .
 */
export default function LandingSection({ onContactClick }) {
  const handleOnContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 h-screen p-4">
      <motion.div
        className="flex flex-col justify-center items-center gap-4 group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="font-bold text-6xl text-gray-50 text-center">
          Garry Jr Dayag
        </h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-bold text-3xl text-gray-50 text-center">
            Welcome to my digital space!
          </h1>
          <p className="font-medium text-xl text-gray-400 text-center">
            Software & Web Developer, student at SAIT
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-row gap-4 group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.25 }}
      >
        <a href={LINKEDIN_URL} target="_blank">
          <FaLinkedinIn size={30} className="text-gray-50" />
        </a>

        <a href={GITHUB_URL} target="_blank">
          <IoLogoGithub size={30} className="text-gray-50" />
        </a>
      </motion.div>
      <motion.div
        className="relative "
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
      >
        <motion.div
          className="absolute -inset-0.5 w-full h-full bg-[#C6AB84] blur-md"
          animate={{
            rotate: [-2, 0, 2],
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{ repeat: Infinity, duration: 8, repeatType: "reverse" }}
        />
        <button
          className="border flex flex-row items-center justify-center gap-2 relative px-8 py-3 bg-[#00111C] rounded-sm border-zinc-600 text-[#C6AB84]"
          onClick={handleOnContactClick}
        >
          <IoMailOutline size={30} />
          <p className="text-lg font-medium">Say hi!</p>
        </button>
      </motion.div>
    </section>
  );
}
