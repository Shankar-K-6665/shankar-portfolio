import "./globals.css";
import type { Metadata } from "next";

import CursorGlow from "@/components/CursorGlow";
import NoiseOverlay from "@/components/NoiseOverlay";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Shankar K | Full Stack Developer (Next.js, FastAPI)",
  description:
    "Full Stack Developer and AI/ML Engineer skilled in Next.js, React, FastAPI, PostgreSQL, Machine Learning, and cloud deployment.",
  keywords: [
    "Shankar K",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "FastAPI",
    "Backend Developer",
    "AI ML Engineer",
    "Portfolio",
  ],
  openGraph: {
    title: "Shankar K | Portfolio",
    description:
      "Modern portfolio showcasing full-stack, AI/ML, and real-world projects.",
    url: "https://your-vercel-url.vercel.app", // replace after deploy
    siteName: "Shankar Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 600,
        alt: "Shankar K",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white overflow-x-hidden">

        {/* Global background effects */}
        <CursorGlow />
        <NoiseOverlay />
        <ScrollProgress />

        {/* Page content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
