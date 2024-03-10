const GITHUB_URL = "https://github.com/garryloopy";
const LINKEDIN_URL = "https://www.linkedin.com/in/garry-jr-dayag-444258203/";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

export default function LandingSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-6xl text-gray-50/90">Garry Jr Dayag</p>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="font-bold text-3xl text-gray-100/90">
            Welcome to my digital space!
          </p>
          <p className="font-semibold text-xl text-gray-100/90">
            Software & Web Developer, student at SAIT
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <a href={LINKEDIN_URL} target="_blank">
          <FaLinkedinIn size={30} className="text-gray-50" />
        </a>

        <a href={GITHUB_URL} target="_blank">
          <IoLogoGithub size={30} className="text-gray-50" />
        </a>
      </div>
    </section>
  );
}
