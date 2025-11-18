import Marquee from "react-fast-marquee";

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
    <div className="py-10">
      <Marquee>
        {data.map((item, idx) => (
          <TestimonialCard key={idx} {...item}></TestimonialCard>
        ))}
      </Marquee>
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
    <div className="shadow-ace flex flex-col gap-4 p-4">
      <div className="text-sm text-gray-500">{quote}</div>
      {/* <p>{quote}</p>
      <div className="flex items-center gap-4"></div> */}
    </div>
  );
};
