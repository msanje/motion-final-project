"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function CliendMdx({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return <MDXRemote {...source} />;
}
