import { getBlogs } from "@/lib/server/blogs";
import { truncate } from "@/lib/utils";
import Link from "next/link";
import SectionHeading from "./section-heading";
import MotionDiv from "./motion-div";

const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <div className="px-4">
      <SectionHeading delay={0.4} className="mb-4">
        I love writing things down.
      </SectionHeading>
      <div className="flex flex-col gap-8">
        {allBlogs.slice(0, 4).map((blog, idx) => (
          <MotionDiv
            key={idx}
            initial={{
              opacity: 0,
              y: 10,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
          >
            <Link
              className="cursor-pointer no-underline"
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
                {truncate(blog.description || "", 120)}
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default LandingBlogs;
