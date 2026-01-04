import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Serif font for headings - gives that editorial/academic feel
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Higher Bar | Lecture Series",
  description: "Local academics sharing research in a relaxed environment. 90 minutes of expertise and dialogue at your local bar.",
  keywords: ["lectures", "Lancaster PA", "academic talks", "public discourse", "education"],
  openGraph: {
    title: "Higher Bar | Lecture Series",
    description: "Local academics sharing research in a relaxed environment. Beer optional, dialogue required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
