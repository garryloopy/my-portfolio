"use client";

import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../layouts/SectionLayout";
import ShowCase from "../components/Showcase";
import ShowcaseContainer from "../components/ShowcaseContainer";

import MiggysMunchiesPlaceholder from "@/public/images/Miggy's_Munchies_placeholder.png";
import ECommerceStorePlaceholder from "@/public/images/E-commerce_App.png";
import RicardoPlaceholder from "@/public/images/ricardo.jpg";
import LordFarquaadPlaceholder from "@/public/images/lord_farquaad.jpg";

/**
 * Represents the projects section
 * @returns Projects Section
 */
export default function ProjectsSection() {
  return (
    <SectionLayout>
      <SectionHeader>Projects</SectionHeader>
      <ShowcaseContainer>
        <ShowCase
          imageAlt="Miggy's Munchies image"
          imageSource={MiggysMunchiesPlaceholder}
          githubURL="https://github.com/garryloopy/capstone-project-winter-2024"
          linkURL=""
          showcaseDescription="An e-commerce web app that allows customers to order food items such as Sushi Bake, Spam Musubi, Mango Graham, and Baked Macaroni."
          showcaseTechnologies="Next.js, Vercel, React JS, MongoDB, Next AUTH, Cloudinary"
          showcaseTitle="Miggy's Munchies"
        />
        <ShowCase
          imageAlt="Virtual Pets"
          imageSource={ECommerceStorePlaceholder}
          githubURL="https://github.com/garryloopy/e-commerce-store"
          linkURL=""
          showcaseDescription="An e-commerce web app that allows customers to buy virtual pats to virtual pets. "
          showcaseTechnologies="Next.js, Vercel, React JS, Firebase"
          showcaseTitle="Virtual Pets"
        />
        <ShowCase
          imageAlt="The one and only ricardo"
          imageSource={RicardoPlaceholder}
          githubURL=""
          linkURL=""
          showcaseDescription="The one and only ricardo milos"
          showcaseTechnologies="You got that"
          showcaseTitle="Ricardo milos"
        />
        <ShowCase
          imageAlt="Lord Farquaad image"
          imageSource={LordFarquaadPlaceholder}
          githubURL=""
          linkURL=""
          showcaseDescription="Still in development"
          showcaseTechnologies="Get off me swamp"
          showcaseTitle="Lord Farquaad"
        />
      </ShowcaseContainer>
    </SectionLayout>
  );
}
