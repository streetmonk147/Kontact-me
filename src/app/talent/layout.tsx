import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Talent | Kontact Me Africa",
  description: "Discover the exceptional African creative professionals we represent in film, literature, and storytelling.",
};

export default function TalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 