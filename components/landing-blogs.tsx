import { getBlogs } from "@/lib/server/blogs";
import { truncate } from "@/lib/utils";
import { div } from "motion/react-client";
import Link from "next/link";

const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <div>
      <p className="text-secondary mb-12 max-w-lg pt-4 text-sm md:text-sm">
        I love writing things down.
      </p>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default LandingBlogs;
