import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Container from "@/components/Container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose min-h-screen p-4 md:pt-20 md:pb-10">
      {children}
    </Container>
  );
}
