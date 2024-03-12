import SectionHeader from "./SectionHeader";
import SectionLayout from "./SectionLayout";

import { IoCaretForwardSharp } from "react-icons/io5";

/**
 * Represents the about me section
 * @returns About me section
 */
export default function FinalSection() {
  // The technologies
  const TECHNOLOGIES = [
    "Javascript ES6+",
    "Typescript",
    "React JS",
    "Java",
    "Python",
    "React Native",
    "C#",
    "Firebase",
  ];

  /**
   * Represents an item component to be used within the sum of technologies section
   * @param {String} param0 The item to print out
   * @returns An item component
   */
  const Item = ({ children }) => {
    return (
      <div className="flex flex-row items-center">
        <IoCaretForwardSharp className="text-gray-50" />
        <p className="text-gray-50 font-normal text-lg">{children}</p>
      </div>
    );
  };

  return (
    <SectionLayout>
      <SectionHeader>Stack</SectionHeader>
      <div className="flex flex-col gap-8">
        <p className="text-gray-50 font-normal text-lg">
          Im a current student at{" "}
          <span className="text-red-700 font-bold text-xl">
            Southern Alberta Institute of Technology
          </span>
          , Software Development diploma. Proficient in C#, Java, Python, and
          more. I specialize in React, React Native, Typescript, Javascript,
          Firebase, and game development using Unity.
        </p>

        <div className="flex flex-col gap-1 w-fit">
          <p className="text-gray-50 font-normal text-lg">
            A sum of the technologies that Ive been working with:
          </p>
          <div className="grid grid-cols-3 w-full gap-1">
            {TECHNOLOGIES.map((technology) => (
              <Item key={technology}>{technology}</Item>
            ))}
          </div>
        </div>

        <p className="text-gray-50 font-normal text-lg">
          In addition to coding, I also do game development with C# with Unity
          on my spare time expanding my interest into C++ with Unreal Engine.
        </p>
      </div>
    </SectionLayout>
  );
}
