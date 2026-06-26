import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Armory | AI Automation",
  description: "Deploy custom enterprise agents and automate complex workflows with Armory.",
  openGraph: {
    title: "Armory | AI Automation",
    description: "Deploy custom enterprise agents and automate complex workflows with Armory.",
    url: "https://your-submission-url.com",
    type: "website",
    images: [
      {
        url: "https://your-submission-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frontend Battle Preview Image",
      }
    ]
  },
  alternates: {
    canonical: "https://your-submission-url.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
