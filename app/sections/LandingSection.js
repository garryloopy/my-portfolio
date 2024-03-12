const GITHUB_URL = "https://github.com/garryloopy";
const LINKEDIN_URL = "https://www.linkedin.com/in/garry-jr-dayag-444258203/";

import { IoLogoGithub, IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

/**
 * Represents the landing section of the main page.
 * @returns A landing section component .
 */
export default function LandingSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 h-screen">
      <div className="flex flex-col justify-center items-center gap-4 group">
        <h1 className="font-bold text-6xl text-gray-50">Garry Jr Dayag</h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-bold text-3xl text-gray-50">
            Welcome to my digital space!
          </h1>
          <p className="font-medium text-xl text-gray-300">
            Software & Web Developer, student at SAIT
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 group">
        <a href={LINKEDIN_URL} target="_blank">
          <FaLinkedinIn size={30} className="text-gray-50" />
        </a>

        <a href={GITHUB_URL} target="_blank">
          <IoLogoGithub size={30} className="text-gray-50" />
        </a>
      </div>
      <div className="relative">
        <div className="absolute -inset-0.5 w-full h-full bg-[#C6AB84] blur-md" />
        <button className="border flex flex-row items-center justify-center gap-2 relative px-8 py-3 bg-[#00111C] rounded-sm text-[#C6AB84]">
          <IoMailOutline size={30} />
          <p className="text-lg font-medium">Say hi!</p>
        </button>
      </div>
    </section>
  );
}
