import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Kontact Me Africa",
  description: "Explore articles, stories, and insights about African cinema, publishing, and creative industries.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 