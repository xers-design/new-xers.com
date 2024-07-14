import type { Metadata } from "next";
import font from "next/font/local";
import { twMerge as twm } from "tailwind-merge";
import Navbar from "@/components/Navbar";
import SectionGetInTouch from "@/components/GetInTouch";
import SmoothScroll from "@/components/SmoothScroll";
import { sanityClient } from "@/studio/lib/client";
import { generalQuery } from "@/studio/queries";
import type { General } from "@/studio/types";

import "./globals.css";

const generalSans = font({
  src: [
    {
      path: "../public/fonts/GeneralSans-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/GeneralSans-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/GeneralSans-Semibold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/fonts/GeneralSans-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Xers",
  description: "We flourish your digital vision into reality.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const generalData: General = await sanityClient.fetch(generalQuery);

  return (
    <html lang="en" className={generalSans.variable}>
      <head>
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="/favicon-32x32.jpg"
        />
        <link
          rel="icon"
          type="image/jpg"
          sizes="16x16"
          href="/favicon-16x16.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.jpg"
        />
        <link rel="mask-icon" href="/apple-touch-icon.png" color="#3E8DFF" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </head>
      <body className={twm(generalSans.className, "bg-white overflow-hidden")}>
        <SmoothScroll>
          <Navbar generalData={generalData} />
          <main>{children}</main>
          <SectionGetInTouch generalData={generalData} />
        </SmoothScroll>
      </body>
    </html>
  );
}
