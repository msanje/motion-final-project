import { Collage } from "@/components/collage";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Scales from "@/components/scales";
import SectionHeading from "@/components/section-heading";
import Subheading from "@/components/Subheading";
import Timeline from "@/components/timeline";

const AboutPage = () => {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen px-12 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About me</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </Subheading>
        <SectionHeading className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love to travel and explore new places.
        </SectionHeading>
        <Collage />
        <SectionHeading className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here&apos;s a time of my life achievements.
        </SectionHeading>
        <Timeline />
      </Container>
    </div>
  );
};

export default AboutPage;
