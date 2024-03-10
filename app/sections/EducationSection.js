import SectionLayout from "./SectionLayout";
import SectionHeader from "./SectionHeader";

/**
 * Represents the education section
 * @returns Education Section
 */
export default function EducationSection() {
  return (
    <SectionLayout>
      <SectionHeader>Education</SectionHeader>
      <div>
        <p className="text-xl font-semibold text-gray-50/90">
          Southern Alberta Institute of Technology - Software Development
        </p>
        <p className="text-base font-semibold text-gray-200/90">
          Calgary, Alberta. 2022 - 2024
        </p>
      </div>
    </SectionLayout>
  );
}
