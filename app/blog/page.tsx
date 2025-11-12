import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All blogs - Sanjay Achar",
  description: "All blogs",
};

export default function BlogsPage() {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </p>
      </Container>
    </div>
  );
}
