import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../layouts/SectionLayout";

import { IoCaretForwardSharp } from "react-icons/io5";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Represents the about me section
 * @returns About me section
 */
export default function ExperienceSection() {
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
        delay: 0.6,
        duration: 1,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <SectionLayout>
      <SectionHeader>Experience</SectionHeader>
      <div className="flex flex-col gap-8">
        <motion.div
          className="bg-zinc-800/45 w-full min-h-44 rounded-md border border-zinc-800 flex flex-col overflow-hidden p-4 gap-4"
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-gray-300 font-semibold text-xl">
              Miggys Munchies
            </h1>
            <p className="text-gray-300 font-normal text-base">
              Jan - Apr, 2024
            </p>
          </div>
          <p className="text-gray-400 font-normal text-lg">
            A four month project as part of the winter 2024 capstone at SAIT,
            partnered with Miggys Munchies as the client and sponsor.
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
