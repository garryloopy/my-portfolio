"use client";

import SectionHeader from "./SectionHeader";
import SectionLayout from "./SectionLayout";
import MiggysMunchiesPlaceholder from "@/public/images/Miggy's_Munchies_placeholder.png";
import ECommerceStorePlaceholder from "@/public/images/E-commerce_App.png";
import ShowCase from "./Showcase";
import ShowcaseContainer from "./ShowcaseContainer";

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
      </ShowcaseContainer>
    </SectionLayout>
  );
}
