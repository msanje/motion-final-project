"use client";

import { cn } from "@/lib/utils";
import { easeInOut, motion } from "motion/react";
import { div } from "motion/react-client";

const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "relative mt-4 w-fit max-w-lg text-sm font-normal md:text-sm",
        className,
      )}
    >
      <Background />
      {children.split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            delay: delay + idx * 0.05,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

export default SectionHeading;

const Background = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100"
    >
      <div className="absolute -top-px -left-px h-1 w-1 rounded-full bg-neutral-200"></div>
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200"></div>
      <div className="absolute -bottom-px -left-px h-1 w-1 rounded-full bg-neutral-200"></div>
      <div className="absolute -right-px -bottom-px h-1 w-1 rounded-full bg-neutral-200"></div>
    </motion.div>
  );
};
