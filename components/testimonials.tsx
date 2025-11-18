import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionHeading from "./section-heading";

export const Testimonials = () => {
  const data = [
    {
      quote:
        "This portfolio feels incredibly polished. Smooth animations, clean layout, everything just clicks.",
      name: "Aarav Patel",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328a23b6?auto=format&fit=crop&q=80&w=400",
    },
    {
      quote:
        "The attention to detail is unreal. I felt the design guiding me instead of standing in the way.",
      name: "Mira Sen",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    },
    {
      quote:
        "Beautifully built and ridiculously smooth. It feels like a production-grade application.",
      name: "Rohan Mehta",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      quote:
        "Love the micro-interactions. Subtle but powerful. Makes the whole experience feel alive.",
      name: "Sarah Williams",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
    },
    {
      quote:
        "Clean, modern, and genuinely enjoyable to use. It's the kind of work that stands out instantly.",
      name: "Leo Carter",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="cursor-pointer py-10">
      <SectionHeading className="pb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={30} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={idx} {...item}></TestimonialCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-ace mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-4 text-sm">
        <Image
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
          width={400}
          height={400}
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
