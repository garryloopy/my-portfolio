"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <header
      className="bg-gradient-to-tr from-[#00111C] to-[#001523]
      h-16 flex flex-row justify-center items-center px-6 shadow-md border border-[#00111C]  fixed top-0 w-full"
    >
      <div className="flex flex-row justify-between items-center w-[64rem] h-full bg-opacity-100">
        <motion.div initial={{ opacity: 0.75 }} whileHover={{ opacity: 1 }}>
          <Link
            className="font-bold text-2xl text-gray-50/90 hover:text-[gray-100]/90"
            href="/"
          >
            Garry Jr Dayag
          </Link>
        </motion.div>
        <div className="flex flex-row gap-4">
          <motion.div initial={{ opacity: 0.75 }} whileHover={{ opacity: 1 }}>
            <Link
              className="font-semibold text-lg text-gray-50/90 hover:text-gray-100/90"
              href="/"
            >
              Home
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0.75 }} whileHover={{ opacity: 1 }}>
            <Link
              className="font-semibold text-lg text-gray-50/90 hover:text-gray-100/90"
              href="/"
            >
              About me
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0.75 }} whileHover={{ opacity: 1 }}>
            <Link
              className="font-semibold text-lg text-gray-50/90 hover:text-gray-100/90"
              href="/"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0.75 }} whileHover={{ opacity: 1 }}>
            <Link
              className="font-semibold text-lg text-gray-50/90 hover:text-gray-100/90"
              href="/prototyping"
            >
              Prototyping
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
