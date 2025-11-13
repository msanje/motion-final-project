import Container from "@/components/Container";
// import { MDXRemote } from "next-mdx-remote";
import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import CliendMdx from "@/components/ClientMdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/lib/server/blogs";
import { redirect } from "next/navigation";

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

  console.log("slug: ", slug);

  const singleBlog = await getSingleBlog(slug);

  if (!singleBlog) {
    redirect("/blog");
  }

  const mdxSource = await serialize(singleBlog);

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        {/* <MDXRemote {...mdxSource} /> */}
        <div className="prose">
          {/* <CliendMdx source={mdxSource} /> */}
          {content}
        </div>
      </Container>
    </div>
  );
}
