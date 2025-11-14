import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

type FrontMatter = {
  title: string;
  description: string;
  image: string;
  date: string;
};

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

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "app", "data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);

      return {
        slug,
        ...frontmatter,
      };
    }),
  );

  return allBlogs;
};

const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "app", "data", slug, "page.mdx"),
      "utf-8",
    );

    if (!singleBlog) {
      return null;
    }

    const { frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (error) {
    return null;
  }
};
