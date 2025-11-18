import Container from "@/components/Container";
import { redirect } from "next/navigation";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/lib/server/blogs";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const frontmatter = await getBlogFrontMatterBySlug(slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " by Sanjay Achar",
    description: frontmatter.description,
  };
}

export default async function SingleBlogsPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Image
          src={frontmatter.image as string}
          alt={frontmatter.title as string}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl border border-neutral-200 object-cover shadow-xl"
          width={100}
          height={100}
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
