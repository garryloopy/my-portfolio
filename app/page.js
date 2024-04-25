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

import { AnimatePresence, motion } from "framer-motion";

export default function HomePage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpenForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsContactFormOpen(false);
  };

  const handleOnEmailSentSuccess = () => {
    setOpenMessage(true);
    setMessage("Email sent successfully!");
  }

  const handleOnEmailSentFailure = () => {
    setOpenMessage(true);
    setMessage("Email failed to send. Please try again later.");
  }

  return (
    <PageLayout>
      {/* Confirmation message  */}
      <AnimatePresence>
        {openMessage && (
            <motion.section
            exit={{scale:0.75, opacity:0}}
            transition={{duration:0.3, ease: "easeInOut"}} className="fixed inset-0 z-20 grid place-items-center sm:p-0" onClick={() => {setOpenMessage(false); handleCloseForm();}}>
            <div className="h-96 sm:w-96 w-max bg-black/50 backdrop-blur-xl rounded-lg flex flex-col items-center justify-center gap-8 sm:p-8 p-4" onClick={(event) => event.stopPropagation()}>
              <p className="text-zinc-50 font-semibold text-lg text-center">{message}</p>
              <button className="w-44 h-10 bg-zinc-900 text-[#C6AB84] rounded-md ring-1 ring-zinc-800 hover:bg-zinc-800 active:bg-zinc-900" onClick={() => {setOpenMessage(false); handleCloseForm() }}>Close Message</button>
            </div>
  
          </motion.section>
        )}

      </AnimatePresence>
      <LandingSection onContactClick={handleOpenForm} />
      <ContactForm
        contactFormState={isContactFormOpen}
        onEmailSentSuccess={handleOnEmailSentSuccess}
        onEmailSentFailure={handleOnEmailSentFailure}
        onFormClose={handleCloseForm}
      />

      <section className="flex flex-col gap-12 items-center p-4">
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
