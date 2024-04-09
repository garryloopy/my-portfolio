import ShowCase from "../components/showcase/LargeShowcase.js";
import ShowcaseContainer from "../components/showcase/LargeShowcaseContainer.js";

import ECommerceStorePlaceholder from "@/public/images/E-commerce_App.png";
import MiggysMunchiesPlaceholder from "@/public/images/Miggy's_Munchies_placeholder.png";
import MaritesPlaceholder from "@/public/images/marites.png";

export default function LargeShowcase() {
  return (
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
        imageAlt="Marites"
        imageSource={MaritesPlaceholder}
        githubURL="https://github.com/garryloopy/marites"
        linkURL="https://marites.vercel.app/"
        showcaseDescription="A chat web app that allows users to chat with each other on a global scale."
        showcaseTechnologies="Next.js, Vercel, React JS, Firebase, TypeScript"
        showcaseTitle="Marites"
      />
    </ShowcaseContainer>
  );
}
