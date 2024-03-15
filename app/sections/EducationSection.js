import SectionLayout from "../layouts/SectionLayout";
import SectionHeader from "../components/SectionHeader";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Represents the education section
 * @returns Education Section
 */
export default function EducationSection() {
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
        delay: 0.5,
        duration: 1,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <SectionLayout>
      <SectionHeader>Education</SectionHeader>
      <motion.div
        className="bg-zinc-800/45 w-full min-h-32 rounded-md border border-zinc-800 flex flex-col overflow-hidden p-4 gap-1"
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-semibold text-gray-300">
            Southern Alberta Institute of Technology
          </p>
          <p className="text-base font-medium text-gray-300">
            Calgary, Alberta
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="text-lg font-semibold text-gray-300">
            Software Development Diploma
          </p>
          <p className="text-base font-medium text-gray-400">2022-2024</p>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
