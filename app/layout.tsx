import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://franklintech.example.com"),
  title: {
    default: "Franklin Tech | Full-Stack Web Development",
    template: "%s | Franklin Tech",
  },
  description:
    "Franklin Tech is the professional brand of Franklin Eze, a full-stack web developer building modern websites and web applications across front end, back end and database.",
  openGraph: {
    title: "Franklin Tech | Full-Stack Web Development",
    description:
      "Ideas into digital experiences. Full-stack web development across front end, back end and database.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${spaceMono.variable} min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
