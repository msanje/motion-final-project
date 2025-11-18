import { Collage } from "@/components/collage";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Timeline from "@/components/timeline";

const AboutPage = () => {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <Heading>About me</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </Subheading>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love to travel and explore new places. I&apos;s a big fan of nature
          and adventure. I&apos;s also a big fan of technology and innovation.
        </p>
        <Collage />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here&apos;s a time of my life achievements.
        </p>
        <Timeline />
      </Container>
    </div>
  );
};

export default AboutPage;
