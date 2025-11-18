import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import { getBlogs } from "@/lib/server/blogs";
import { truncate } from "@/lib/utils";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - Sanjay Achar",
  description: "All blogs",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>All blogs</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </Subheading>

        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link
              className="cursor-pointer no-underline"
              key={idx}
              href={`/blog/${blog.slug}`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description || "", 150)}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
