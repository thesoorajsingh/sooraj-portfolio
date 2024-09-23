import { Providers } from "app/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
  openGraph: {
    type: "article",
    url: `https://thesoorajsingh/work`,
    images: [
      {
        url: `/ogs/og-bg-work.png`,
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main>{children}</main>
    </Providers>
  );
}
