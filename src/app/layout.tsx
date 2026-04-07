import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Troy Enzo",
  description: "Vibe code, curate meetups and grow brands for a living.",
  openGraph: {
    title: "Troy Enzo",
    description: "Vibe code, curate meetups and grow brands for a living.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Troy Enzo",
    description: "Vibe code, curate meetups and grow brands for a living.",
    creator: "@blushdas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://pub-d213b699eec14b34b97b25a8f935bbf8.r2.dev" />
        <link rel="dns-prefetch" href="https://pub-d213b699eec14b34b97b25a8f935bbf8.r2.dev" />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
