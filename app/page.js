"use client";

import PageLayout from "@/app/layouts/PageLayout";
import ColorPalette from "./components/ColorPalette";

import EducationSection from "./sections/EducationSection";
import AboutMeSection from "./sections/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection";
import LandingSection from "./sections/LandingSection";

export default function HomePage() {
  return (
    <PageLayout>
      <ColorPalette />
      <LandingSection />
      <section className="flex flex-col gap-20 items-center">
        <AboutMeSection />
        <EducationSection />
        <ProjectsSection />
      </section>
    </PageLayout>
  );
}
