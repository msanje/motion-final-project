"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function CliendMdx({
  source,
  slug,
}: {
  source: MDXRemoteSerializeResult;
  slug: string;
}) {
  console.log("slug from CliendMdx: ", slug);

  return <MDXRemote {...source} />;
}
