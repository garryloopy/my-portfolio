"use client";

import Link from "next/link"
import { motion } from "framer-motion"

import { useScroll, useMotionValueEvent } from "framer-motion"


export default function NavBar() {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    })

    return (
        <header className={`bg-gray-100 ${scrollY > 0 ? "bg-gray-950" : "bg-opacity-70"} h-20 flex flex-row justify-between p-6 overflow-hidden border shadow-sm fixed w-full`}>
            <motion.div
                            initial={{opacity:0.75}}
                            whileHover={{opacity:1}}>
                <Link className="font-bold text-2xl text-gray-700 hover:text-gray-800" href="/">Garry Jr Dayag</Link>
            </motion.div>
            <div className="flex flex-row gap-4">
                <motion.div
                initial={{opacity:0.75}}
                whileHover={{opacity:1}}
                >
                    <Link className="font-semibold text-lg text-gray-700 hover:text-gray-800" href="/">Home</Link>
                </motion.div>
                <motion.div
                initial={{opacity:0.75}}
                whileHover={{opacity:1}}
                >
                    <Link className="font-semibold text-lg text-gray-700 hover:text-gray-800" href="/about-me">About me</Link>
                </motion.div>
                <motion.div
                initial={{opacity:0.75}}
                whileHover={{opacity:1}}
                >
                    <Link className="font-semibold text-lg text-gray-700 hover:text-gray-800" href="/projects">Projects</Link>
                </motion.div>
            </div>
        </header>
    )
}