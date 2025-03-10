import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Kontact Me Africa",
  description: "Explore our award-winning films, documentaries, and creative works that showcase authentic African narratives.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 