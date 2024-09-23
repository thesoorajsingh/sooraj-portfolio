import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PreloadResources } from "./preload";
import { Providers } from "./providers";
import CommandMenu from "./components/CmdK";

export const metadata: Metadata = {
  metadataBase: new URL("https://thesoorajsingh.me"),
  title: {
    default: "Sooraj Singh",
    template: "%s | Sooraj Singh",
  },
  description: "Engineer, Writer and an Optimist",
  openGraph: {
    title: "Sooraj Singh",
    description:
      "Software Engineer, Writer, Techno-Optimist and a Coffee Addict",
    url: "https://thesoorajsingh.me",
    siteName: "Sooraj Singh",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sooraj Singh",
    card: "summary_large_image",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <CommandMenu />
          <Navbar />
          <Providers>{children}</Providers>
          <Analytics />
          <SpeedInsights />
          <PreloadResources />
        </main>
      </body>
    </html>
  );
}
