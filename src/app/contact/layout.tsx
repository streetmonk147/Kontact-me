import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kontact Me Africa",
  description: "Get in touch with our team for inquiries about film production, publishing, talent management, or workshop opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 