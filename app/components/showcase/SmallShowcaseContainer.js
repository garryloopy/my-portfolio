import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SmallShowcaseContainer({ children }) {
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
    <motion.div
      className="bg-zinc-800/45 w-full min-h-64 rounded-md border border-zinc-800 flex flex-row overflow-hidden p-4 gap-4"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
