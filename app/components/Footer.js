"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="flex flex-col items-center w-full py-12 bg-zinc-900/25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-base font-medium text-gray-300">
        Built and designed by - Garry Jr Dayag
      </p>
      <p className="text-base font-medium text-gray-300">
        All rights reserved. ©
      </p>
    </motion.footer>
  );
}
