"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import SectionHeading from "./section-heading";

const Projects = ({ projects = defaultProjects }: { projects?: Project[] }) => {
  return (
    <div className="py-10">
      <SectionHeading delay={0.2}>
        I love building web apps and products that can impact millions of life
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-4"
          >
            <Link href={project.href} className="cursor-pointer">
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <div className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
