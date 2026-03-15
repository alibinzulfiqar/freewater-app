import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookPopup from "@/components/BookPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "FreeWater® – Water Paid For By Ads",
  description:
    "FreeWater® is a revolutionary advertising platform that gives away premium spring water for free – paid for by the ads on the packaging. Ten cents per beverage is donated to fight the global water crisis.",
  keywords: "free water, advertising, sustainability, water charity, aluminum bottle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BookPopup />
      </body>
    </html>
  );
}
