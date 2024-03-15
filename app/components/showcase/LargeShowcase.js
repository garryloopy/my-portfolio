import Image from "next/image";

import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

export default function ShowCase({
  imageSource,
  imageAlt,
  showcaseTitle,
  showcaseDescription,
  showcaseTechnologies,
  linkURL,
  githubURL,
}) {
  return (
    <div className="relative w-full h-full flex flex-col justify-end flex-none">
      <div className="absolute w-full h-full brightness-75 -z-10">
        <Image
          className="object-cover lg"
          src={imageSource}
          fill={true}
          alt={imageAlt}
          sizes="(max-width: 1024px) 50vw, (max-width: 768px) 80vw, 1200px"
        />
      </div>

      <div className="flex flex-col gap-5 items-center pb-10 px-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-50/90 font-semibold text-2xl text-center">
            {showcaseTitle}
          </p>
          <p className="text-gray-50/90 font-medium text-base text-center">
            {showcaseDescription}
          </p>
          <p className="text-[#C6AB84] font-medium text-base">
            {showcaseTechnologies}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a href={linkURL} target="_blank">
            <FaLink size={30} className="text-gray-50" />
          </a>
          <a href={githubURL} target="_blank">
            <IoLogoGithub size={30} className="text-gray-50" />
          </a>
        </div>
      </div>
    </div>
  );
}
