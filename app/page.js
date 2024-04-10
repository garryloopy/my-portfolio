"use client";

import PageLayout from "@/app/layouts/PageLayout";

import EducationSection from "./sections/EducationSection";
import AboutMeSection from "./sections/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection";
import LandingSection from "./sections/LandingSection";
import ExperienceSection from "./sections/ExperienceSection";

import { Element } from "react-scroll";
import ContactForm from "./components/ContactForm";

import { useState } from "react";

export default function HomePage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseDialog = () => {
    setIsContactFormOpen(false);
  };

  return (
    <PageLayout>
      <LandingSection onContactClick={handleOpenDialog} />
      <ContactForm
        contactFormState={isContactFormOpen}
        onDialogClose={handleCloseDialog}
      />

      <section className="flex flex-col gap-12 items-center p-8">
        <Element name="aboutMeElement" />
        <AboutMeSection />
        <Element name="educationElement" />
        <EducationSection />
        <Element name="experienceElement" />
        <ExperienceSection />
        <Element name="projectsElement" />
        <ProjectsSection />
      </section>
    </PageLayout>
  );
}
