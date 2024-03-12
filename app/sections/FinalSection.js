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
          Nulla commodo nostrud culpa aute non enim sunt officia quis sunt id.
          Anim adipisicing voluptate nulla nostrud officia incididunt sit fugiat
          dolore amet. Non cillum sint ad duis veniam pariatur adipisicing.
          Pariatur elit ex veniam ex veniam nostrud.
        </p>
      </div>
    </SectionLayout>
  );
}
