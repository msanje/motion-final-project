import Container from "@/components/Container";
// import { MDXRemote } from "next-mdx-remote";
import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import CliendMdx from "@/components/ClientMdx";
import { redirect } from "next/navigation";
import { getSingleBlog } from "@/lib/server/blogs";

export default async function SingleBlogsPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // const singleBlog = await fs.readFile(
  //   path.join(process.cwd(), "app", "data", "tailwindcss-basics", "page.mdx"),
  //   "utf-8",
  // );

  // console.log("slug: ", slug);

  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  console.log("frontmatter: ", frontmatter);
  console.log("frontmatter.title: ", frontmatter.title);

  // const mdxSource = await serialize(blog);

  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        {/* <MDXRemote {...mdxSource} /> */}
        <div className="prose mx-auto">
          {/* <CliendMdx source={mdxSource} /> */}
          {content}
        </div>
      </Container>
    </div>
  );
}
