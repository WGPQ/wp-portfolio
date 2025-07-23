import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BottomNavBar from "@/components/Layout/BottomNavBar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Puma",
  description: "Computer Systems Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>William Puma - Desarrollador Web</title>
        <meta name="description" content="Portafolio de William Puma, ingeniero en sistemas, desarrollador web especializado en NestJS, Flutter, Azure y más." />
        <meta name="keywords" content="William Puma, desarrollador, Flutter, NestJS, DevOps, Ecuador, portafolio" />
        <meta name="author" content="William Puma" />
        <meta property="og:title" content="William Puma - Desarrollador Web" />
        <meta property="og:description" content="Explora el portafolio de William Puma con proyectos en tecnologías modernas." />
        <meta property="og:url" content="https://williampuma.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://williampuma.dev/about" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-15">
          {children}
        </div>
        <Footer />
        <BottomNavBar />
      </body>
    </html>
  );
}
