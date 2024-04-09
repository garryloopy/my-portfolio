import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

import MiggysMunchiesPlaceholder from "@/public/images/Miggy's_Munchies_placeholder.png";
import ECommerceStorePlaceholder from "@/public/images/E-commerce_App.png";
import MaritesPlaceholder from "@/public/images/Marites.png";

import SmallShowcaseContainer from "../components/showcase/SmallShowcaseContainer";

export default function SmallShowcase() {
  return (
    <div className="flex flex-col gap-4">
      <SmallShowcaseContainer>
        {/* Image container */}
        <div className="relative w-1/3 overflow-hidden rounded-md md:block hidden">
          <Image
            className="object-cover"
            src={MiggysMunchiesPlaceholder}
            fill={true}
            alt="Miggy's Munchies"
            sizes="(max-width: 1024px) 50vw, (max-width: 768px) 80vw, 1200px"
          />
        </div>

        {/* Details container */}
        <div className="md:w-2/3 w-full lg:p-2 flex flex-col gap-6 sm:gap-4 justify-between">
          <div className="flex flex-col h-full gap-2">
            <h1 className="text-gray-200 font-semibold text-lg">
              Miggy&apos;s Munchies
            </h1>
            <p className="text-gray-400 font-normal text-base">
              An e-commerce web app that allows customers to order food items
              such as Suchi Bake, Spam Musubi, Mango Graham, and Baked Macaroni.
              A{" "}
              <span className="text-gray-200 font-medium">
                Capstone Project during Winter 2024 at SAIT, partnered with
                Miggy&apos;s Munchies as the client and sponsor.
              </span>
            </p>
            <p className="text-[#C6AB84] font-medium text-base">
              Made with Next.js, React JS, MongoDB, Next Auth, Cloudinary
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center md:justify-start justify-center">
            <a href="" target="_blank">
              <FaLink size={30} className="text-gray-50" />
            </a>
            <a
              href="https://github.com/garryloopy/capstone-project-winter-2024"
              target="_blank"
            >
              <IoLogoGithub size={30} className="text-gray-50" />
            </a>
          </div>
        </div>
      </SmallShowcaseContainer>
      <SmallShowcaseContainer>
        {/* Image container */}
        <div className="relative w-1/3 overflow-hidden rounded-md md:block hidden">
          <Image
            className="object-cover"
            src={ECommerceStorePlaceholder}
            fill={true}
            alt="Virtual Pets image"
            sizes="(max-width: 1024px) 50vw, (max-width: 768px) 80vw, 1200px"
          />
        </div>
        <div className="md:w-2/3 w-full lg:p-2 flex flex-col gap-6 sm:gap-4 justify-between">
          <div className="flex flex-col h-full gap-2">
            <h1 className="text-gray-200 font-semibold text-lg">
              Virtual Pets
            </h1>
            <p className="text-gray-400 font-normal text-base">
              An e-commerce web app that allows customers to buy virtual pats to
              virtual pets.{" "}
            </p>
            <p className="text-[#C6AB84] font-medium text-base">
              Built with Next.js, Vercel, React JS, Firebase
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center md:justify-start justify-center">
            <a href="" target="_blank">
              <FaLink size={30} className="text-gray-50" />
            </a>
            <a
              href="https://github.com/garryloopy/e-commerce-store"
              target="_blank"
            >
              <IoLogoGithub size={30} className="text-gray-50" />
            </a>
          </div>
        </div>
      </SmallShowcaseContainer>

      <SmallShowcaseContainer>
        {/* Image container */}
        <div className="relative w-1/3 overflow-hidden rounded-md md:block hidden">
          <Image
            className="object-cover"
            src={MaritesPlaceholder}
            fill={true}
            alt="Marites image"
            sizes="(max-width: 1024px) 50vw, (max-width: 768px) 80vw, 1200px"
          />
        </div>
        <div className="md:w-2/3 w-full lg:p-2 flex flex-col gap-6 sm:gap-4 justify-between">
          <div className="flex flex-col h-full gap-2">
            <h1 className="text-gray-200 font-semibold text-lg">Marites</h1>
            <p className="text-gray-400 font-normal text-base">
              A chat web app that allows users to chat with each other on a
              global scale.
            </p>
            <p className="text-[#C6AB84] font-medium text-base">
              Built with Next.js, Vercel, React JS, Firebase, TypeScript
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center md:justify-start justify-center">
            <a href="https://marites.vercel.app/" target="_blank">
              <FaLink size={30} className="text-gray-50" />
            </a>
            <a href="https://github.com/garryloopy/marites" target="_blank">
              <IoLogoGithub size={30} className="text-gray-50" />
            </a>
          </div>
        </div>
      </SmallShowcaseContainer>
    </div>
  );
}
