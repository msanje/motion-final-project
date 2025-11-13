import Container from "@/components/Container";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose min-h-screen p-4 md:pt-20 md:pb-10">
      {children}
    </Container>
  );
}
