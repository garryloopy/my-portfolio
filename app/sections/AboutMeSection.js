import SectionHeader from "./SectionHeader";
import SectionLayout from "./SectionLayout";

import { IoCaretForwardSharp } from "react-icons/io5";

/**
 * Represents the about me section
 * @returns About me section
 */
export default function AboutMeSection() {
  // The technologies
  const TECHNOLOGIES = [
    "Javascript ES6+",
    "Typescript",
    "Python",
    "Java",
    "C#",
    "React.js",
    "React Native",
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
        <IoCaretForwardSharp className="text-gray-200/90" />
        <p className="text-gray-200/90 font-medium text-lg">{children}</p>
      </div>
    );
  };

  return (
    <SectionLayout>
      <SectionHeader>About Me</SectionHeader>
      <div className="flex flex-col gap-6">
        <p className="text-gray-200/90 font-medium text-lg">
          A current student at Southern Alberta Institute of Technology,
          Software Development diploma, I bring a dynamic skill set and passion
          for creating innovative solutions. Proficient in C#, Java, Python, and
          more. I specialize in React, React Native, Typescript, Javascript,
          Firebase, and game development using Unity.
        </p>

        <div className="flex flex-col gap-1 w-fit">
          <p className="text-gray-200/90 font-medium text-lg">
            A sum of the technologies that Ive been working with:
          </p>
          <div className="grid grid-cols-3 w-full gap-1">
            {TECHNOLOGIES.map((technology) => (
              <Item key={technology}>{technology}</Item>
            ))}
          </div>
        </div>

        <p className="text-gray-200/90 font-medium text-lg">
          Outside of work, I'm interested in further developing my game
          development skills.
        </p>
      </div>
    </SectionLayout>
  );
}
