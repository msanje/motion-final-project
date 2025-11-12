"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Project = {
  title: string;
  src: string;
  href: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project Atlas",
      src: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      href: "#",
    },
    {
      title: "Neon Dashboard",
      src: "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1412",
      href: "#",
    },
    {
      title: "Echo Notes",
      src: "https://images.unsplash.com/photo-1628296499994-70face79ab36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1373",
      href: "#",
    },
    {
      title: "Pulse Tracker",
      src: "https://images.unsplash.com/photo-1759646848980-22662fcabafb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1460",
      href: "#",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of life
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
            }}
          >
            <Image
              src={project.src}
              alt={project.title}
              height={300}
              width={300}
              className="h-72 w-full rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
