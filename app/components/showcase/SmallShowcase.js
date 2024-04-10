import Image from "next/image";
import SmallShowcaseContainer from "./SmallShowcaseContainer";

import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

export default function SmallShowcase({
  imageSource,
  imageAlt,
  showcaseTitle,
  showcaseDescription,
  strongDescription,
  showcaseTechnologies,
  linkURL,
  githubURL,
}) {
  return (
    <SmallShowcaseContainer>
      {/* Image container */}
      <div className="relative w-1/3 overflow-hidden rounded-md md:block hidden">
        <Image
          className="object-cover"
          src={imageSource}
          fill={true}
          alt={imageAlt}
          sizes="(max-width: 1024px) 50vw, (max-width: 768px) 80vw, 1200px"
        />
      </div>
      <div className="md:w-2/3 w-full lg:p-2 flex flex-col gap-6 sm:gap-4 justify-between">
        <div className="flex flex-col h-full gap-2">
          <h1 className="text-gray-200 font-semibold text-lg">
            {showcaseTitle}
          </h1>
          <p className="text-gray-400 font-normal text-base">
            {showcaseDescription}
            {strongDescription && (
              <span className="text-gray-200 font-medium">
                {strongDescription}
              </span>
            )}
          </p>
          <p className="text-[#C6AB84] font-medium text-base">
            {showcaseTechnologies}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center md:justify-start justify-center">
          <a href={linkURL} target="_blank">
            <FaLink size={30} className="text-gray-50" />
          </a>
          <a href={githubURL} target="_blank">
            <IoLogoGithub size={30} className="text-gray-50" />
          </a>
        </div>
      </div>
    </SmallShowcaseContainer>
  );
}
