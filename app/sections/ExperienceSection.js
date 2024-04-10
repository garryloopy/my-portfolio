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
          className="flex min-h-44 w-full flex-col gap-4 overflow-hidden rounded-md border border-zinc-800 bg-zinc-800/45 p-4"
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-300">
              Miggys Munchies
            </h1>
            <p className="text-base font-normal text-gray-300">
              Jan - Apr, 2024
            </p>
          </div>
          <p className="text-md font-normal text-gray-400">
            A four month project as part of the winter 2024 capstone at SAIT,
            partnered with Miggys Munchies as the client and sponsor.
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
