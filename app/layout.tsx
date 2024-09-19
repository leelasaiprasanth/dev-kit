import type { Metadata } from "next";
import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Developer-Kit",
  description: "Developers Toolkit for Misllenious tools...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={"w-full h-screen"}>{children}</body>
    </html>
  );
}
