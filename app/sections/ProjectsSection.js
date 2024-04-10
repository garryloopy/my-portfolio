"use client";

import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../layouts/SectionLayout";

import SmallShowcaseSection from "../sections/SmallShowcaseSection";
import LargeShowcaseSection from "../sections/LargeShowcaseSection";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Represents the projects section
 * @returns Projects Section
 */
export default function ProjectsSection() {
  const refOptions = {
    once: true,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, refOptions);

  const variant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.75,
        duration: 1,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <SectionLayout>
      <SectionHeader>Projects</SectionHeader>
      <div className="flex flex-col gap-8">
        <LargeShowcaseSection />
        <SmallShowcaseSection />
      </div>

      <div className="flex flex-col gap-8">
        <motion.p
          className="text-gray-400 font-normal text-lg"
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Projects that I&apos;ve created or was a part of is mostly composed of
          web apps made with React, specifically NextJS React with Tailwind CSS
          alongside other frameworks such as MongoDB, Vercel, and Firebase.
        </motion.p>
      </div>
    </SectionLayout>
  );
}
