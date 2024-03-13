import SectionHeader from "./SectionHeader";
import SectionLayout from "./SectionLayout";

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
        delay: 0.5,
        duration: 1,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <SectionLayout>
      <SectionHeader>Experience</SectionHeader>
      <div className="flex flex-col gap-8">
        <motion.p
          className="text-gray-50 font-normal text-lg"
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Nulla commodo nostrud culpa aute non enim sunt officia quis sunt id.
          Anim adipisicing voluptate nulla nostrud officia incididunt sit fugiat
          dolore amet. Non cillum sint ad duis veniam pariatur adipisicing.
          Pariatur elit ex veniam ex veniam nostrud.
        </motion.p>
      </div>
    </SectionLayout>
  );
}
