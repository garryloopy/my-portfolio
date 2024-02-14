"use client";

import {motion} from "framer-motion";

import PageLayout from "./components/Page"

import { FaLinkedin } from "react-icons/fa6";

import LinkedInLogo from "@/public/images/linkedin.png";
import GitHubLogo from "@/public/images/github-logo.png"

import Image from "next/image";
import Link from "next/link";

const GITHUB_URL = "https://github.com/garryloopy";
const LINKEDIN_URL = "https://www.linkedin.com/in/garry-jr-dayag-444258203/";

export default function HomePage() {
  return (
    <motion.main className="min-h-screen flex flex-col justify-center items-center gap-6"
    initial={{opacity:0}}
        animate={{opacity:1}}>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-bold text-6xl text-gray-800">Garry Jr Dayag</p>
        <p className="font-semibold text-xl text-gray-800">Web & Software Developer</p>
      </div>
      <div className="flex flex-row gap-4">
        <a href={LINKEDIN_URL} target="_blank">
          <Image src={LinkedInLogo} alt="LinkedIn logo" width={30} height={30} priority="true"/>
        </a>
        <a href={GITHUB_URL} target="_blank">
        <Image src={GitHubLogo} width={30} alt="GitHub logo" height={30} priority="true"/>
        </a>
      </div>
    </motion.main>
  )
}