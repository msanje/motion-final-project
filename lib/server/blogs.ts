import { promises as fs } from "fs";
import path from "path";

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "app", "data", slug, "page.mdx"),
      "utf-8",
    );

    return singleBlog;
  } catch (error) {
    console.log("File not found for slug: ", slug);
    return null;
  }
};
