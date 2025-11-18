import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-10 py-3">
      <p className="text-xs text-neutral-500">
        Built with love by Sanjay Achar
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href={"https://x.com/msanjayachar"}>
          <IconBrandX className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://www.linkedin.com/in/m-sanjay-achar/"}>
          <IconBrandLinkedin className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href={"https://github.com/msanje"}>
          <IconBrandGithub className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
