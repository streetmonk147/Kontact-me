import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kontact Me Africa",
  description: "Learn about our mission to connect African storytellers with global audiences through film, publishing, and talent management.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 