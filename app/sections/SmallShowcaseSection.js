import MiggysMunchiesPlaceholder from "@/public/images/Miggy's_Munchies_placeholder.png";
import ECommerceStorePlaceholder from "@/public/images/E-commerce_App.png";
import MaritesPlaceholder from "@/public/images/Marites.png";

import SmallShowcase from "../components/showcase/SmallShowcase";

export default function SmallShowcaseSection() {
  return (
    <div className="flex flex-col gap-4">
      <SmallShowcase
        imageSource={MiggysMunchiesPlaceholder}
        imageAlt="Miggy's Munchies image"
        showcaseTitle="Miggy's Munchies"
        showcaseDescription="An e-commerce web app that allows customers to order food items such as Suchi Bake, Spam Musubi, Mango Graham, and Baked Macaroni. "
        strongDescription="A Capstone Project during Winter 2024 at SAIT, partnered with
        Miggy's Munchies as the client and sponsor."
        githubURL="https://github.com/garryloopy/capstone-project-winter-2024"
        linkURL=""
      />

      <SmallShowcase
        imageSource={ECommerceStorePlaceholder}
        imageAlt="Virtual Pets image"
        showcaseTitle="Virtual Pets"
        showcaseDescription="An e-commerce web app that allows customers to buy virtual pats to
              virtual pets."
        githubURL="https://github.com/garryloopy/e-commerce-store"
        linkURL=""
        showcaseTechnologies="Built with Next.js, Vercel, React JS, Firebase"
      />

      <SmallShowcase
        imageSource={MaritesPlaceholder}
        imageAlt="Marites image"
        showcaseTitle="Marites"
        showcaseDescription="A chat web app that allows users to chat with each other on a
  global scale."
        showcaseTechnologies="Built with Next.js, Vercel, React JS, Firebase, TypeScript"
        linkURL="https://marites.vercel.app/"
        githubURL="https://github.com/garryloopy/marites"
      />
    </div>
  );
}
