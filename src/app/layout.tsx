import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Font configurations
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kontact Me Africa - African Storytelling & Creativity",
  description:
    "Connecting African creatives with global audiences through authentic storytelling, film production, publishing, and talent management.",
  keywords:
    "African storytelling, film production, publishing, talent management, African culture, creative industry, documentary",
  authors: [{ name: "Kontact Me Africa Team" }],
  creator: "Kontact Me Africa",
  openGraph: {
    title: "Kontact Me Africa - African Storytelling & Creativity",
    description:
      "Connecting African creatives with global audiences through authentic storytelling.",
    url: "https://kontactmeafrica.com",
    siteName: "Kontact Me Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfair.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
