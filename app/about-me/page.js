"use client";

import { motion } from "framer-motion";

export default function AboutMePage() {
  return (
    <motion.main
      className="min-h-screen flex flex-col justify-center items-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-bold text-6xl text-gray-800">About me</p>
      </div>
    </motion.main>
  );
}
