import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  as: Tag = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Tag
      className={cn(
        "text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
