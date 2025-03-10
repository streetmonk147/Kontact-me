import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Kontact Me Africa",
  description: "Explore our comprehensive services in film production, publishing, talent management, and educational workshops.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 