import { Montserrat } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Analytics } from "@vercel/analytics/react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Garry Jr Dayag",
  description: "Portfolio showcase made by Garry Jr Dayag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <Analytics />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
