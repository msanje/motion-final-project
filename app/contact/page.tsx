import ContactForm from "@/components/contact-form";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Scales from "@/components/scales";
import Subheading from "@/components/Subheading";

export default function ContactPage() {
  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <Subheading>
          I&apos;m open to freelancing offers. Reach out to me to inquire more
          about my work.
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
