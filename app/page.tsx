import Container from "@/components/Container";
import Heading from "@/components/Heading";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/projects";
import Subheading from "@/components/Subheading";
import { Testimonials } from "@/components/testimonials";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>Tyler Durden!</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
