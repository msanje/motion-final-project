"use client";

import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Data = {
  title: string;
  year: string;
  content: {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
  }[];
};

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      title: "Nothing",
      year: "2025",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description: "more about the thing",
        },
      ],
    },
    {
      title: "Built an AI-powered task splitter.",
      year: "2024",
      content: [
        {
          title: "Automatically breaks tasks into subtasks.",
          description: "Users reported 40% faster workflow.",
        },
      ],
    },
    {
      title: "Launched my first open-source CLI tool.",
      year: "2024",
      content: [
        {
          title: "Hit 500 GitHub stars in 48 hours.",
          description: "Focused on simplicity and speed.",
        },
      ],
    },
    {
      title: "Released a minimal habit-tracking app.",
      year: "2023",
      content: [
        {
          title: "Reached 3K active users in the first month.",
          description: "Design inspired by atomic habits.",
        },
      ],
    },
    {
      title: "Created a custom JavaScript runtime.",
      year: "2020",
      content: [
        {
          title: "Benchmarked 1.5x faster than Node.",
          description: "Optimized around lightweight I/O ops.",
        },
      ],
    },
    {
      title: "Shipped a developer analytics dashboard.",
      year: "2020",
      content: [
        {
          title: "Helped teams visualize code review patterns.",
          description: "Adopted by a YC startup within a week.",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="shadow-section-inset my-6 border-y border-neutral-100 px-4 py-4"
    >
      {data.map((achievement, idx) => (
        <div key={idx}>
          <motion.h2
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * idx,
            }}
            className="shadow-ace m-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {achievement.year} {"-"} {achievement.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {achievement.content.map((item, idx) => (
              <div key={idx} className="pl-4">
                <Step idx={idx} isInView={isInView}>
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children?: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.1 * idx,
      }}
      className={cn("flex items-center gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-0.5 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  );
};
