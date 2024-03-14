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
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="text-xl font-semibold text-gray-400">
          Southern Alberta Institute of Technology - Software Development
        </p>
        <p className="text-base font-medium text-gray-400">
          Calgary, Alberta. 2022 - 2024
        </p>
      </motion.div>
    </SectionLayout>
  );
}
