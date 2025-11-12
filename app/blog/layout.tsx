import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Container from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Freelancer Portfolio Website Template",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth micro interactions, perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      {children}
    </Container>
  );
}
