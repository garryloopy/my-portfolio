"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header
      className="bg-zinc-800/70
      h-16 flex flex-row justify-center items-center px-6 shadow-md fixed top-0 w-full z-10 border-b border-zinc-600"
    >
      <div className="flex flex-row justify-between items-center w-[64rem] h-full">
        <Link className="font-bold text-xl text-gray-50/90" href="/">
          Garry Jr Dayag
        </Link>
        <div className="flex flex-row gap-4">
          <Link className="font-medium text-lg text-gray-50" href="/">
            Home
          </Link>
          <Link className="font-medium text-lg text-gray-50" href="/">
            About me
          </Link>
          <Link className="font-medium text-lg text-gray-50" href="/">
            Projects
          </Link>
          <Link
            className="font-medium text-lg text-gray-50"
            href="/prototyping"
          >
            Prototyping
          </Link>
        </div>
      </div>
    </header>
  );
}
