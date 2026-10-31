
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/* ----------------------------------------
   Fonts
---------------------------------------- */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

/* ----------------------------------------
   SEO Metadata
---------------------------------------- */

const siteTitle = "Dima Nemer | Full-Stack Software Developer";

const siteDescription =
  "Dima Nemer is a full-stack software developer building secure, production-ready web and mobile applications using React, Next.js, TypeScript, React Native, and Supabase.";

export const metadata = {
  metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
),
  title: {
    default: siteTitle,
    template: "%s | Dima Nemer",
    alternates: {
  canonical: "/",
},
  },

  description: siteDescription,

  applicationName: "Dima Nemer Portfolio",

  keywords: [
    "Dima Nemer",
    "Full Stack Developer",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Supabase",
    "Web Development",
    "Mobile App Development",
    "Software Engineering",
  ],

  authors: [
    {
      name: "Dima Nemer",
    },
  ],

  creator: "Dima Nemer",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Dima Nemer Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

/* ----------------------------------------
   Root Layout
---------------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${fraunces.variable}
        ${jetbrainsMono.variable}
      `}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteNav />

          <div className="flex-1">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
