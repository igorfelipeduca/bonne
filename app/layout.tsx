import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Bonne",
  description: "E-commerce made easy",
  twitter: {
    card: "summary_large_image",
    site: "https://bonne.vercel.app",
    creator: "@igorfelipeduca",
    title: "Bonne",
    description: "E-commerce made easy",
    images: ["/preview.png"],
  },
  openGraph: {
    locale: "pt_BR",
    url: "https://bonne.vercel.app",
    title: "Bonne - E-commerce made easy",
    description: "E-commerce made easy",
    type: "website",
    images: ["/preview.png"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} dark`}>{children}</body>
    </html>
  );
}
