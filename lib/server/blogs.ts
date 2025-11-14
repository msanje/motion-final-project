import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "app", "data", slug, "page.mdx"),
      "utf-8",
    );

    const blog = await compileMDX<{ title: string }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return blog;
  } catch (error) {
    console.log("File not found for slug: ", slug);
    return null;
  }
};
