"use client";

import PageLayout from "@/app/layouts/PageLayout";

import EducationSection from "./sections/EducationSection";
import AboutMeSection from "./sections/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection";
import LandingSection from "./sections/LandingSection";
import ExperienceSection from "./sections/ExperienceSection";

import { Element } from "react-scroll";

export default function HomePage() {
  return (
    <PageLayout>
      <LandingSection />
      <section className="flex flex-col gap-32 items-center">
        <Element name="aboutMeElement">
          <AboutMeSection />
        </Element>
        <Element name="educationElement">
          <EducationSection />
        </Element>

        <Element name="experienceElement">
          <ExperienceSection />
        </Element>

        <Element name="projectsElement">
          <ProjectsSection />
        </Element>
      </section>
    </PageLayout>
  );
}
