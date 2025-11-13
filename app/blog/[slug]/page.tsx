import Container from "@/components/Container";
// import { MDXRemote } from "next-mdx-remote";
import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import CliendMdx from "@/components/ClientMdx";

export default async function SingleBlogsPage() {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "app", "data", "tailwindcss-basics", "page.mdx"),
    "utf-8",
  );

  const mdxSource = await serialize(singleBlog);

  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        {/* <MDXRemote {...mdxSource} /> */}
        <CliendMdx source={mdxSource} />
      </Container>
    </div>
  );
}
