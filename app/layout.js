import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Garry Jr Dayag",
  description: "Portfolio showcase made by Garry Jr Dayag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
