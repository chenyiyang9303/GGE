"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="relative w-full bg-white dark:bg-gray-900 py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-accent-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-accent-600 dark:text-accent-300 max-w-3xl mx-auto">
            200+ companies trust us to deliver transformational results. Here's what industry leaders say about working with our team to unlock exponential growth.
          </p>
        </div>

        <div className="relative">
          <div className="h-full overflow-hidden w-full">
            <TestimonialsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      <Marquee direction="right" pauseOnHover speed={50}>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-2 items-center mt-8">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-600 dark:text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
      <Marquee className="mt-10" direction="right" pauseOnHover speed={70}>
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-2 items-center mt-8">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-2xl min-h-[230px] h-full max-w-md md:max-w-lg mx-4 bg-white dark:bg-accent-800 border border-accent-100 dark:border-accent-700/50 hover:border-primary-200 dark:hover:border-primary-600 shadow-sm hover:shadow-xl transition-all duration-300 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-sm md:text-base font-medium dark:text-accent-200 text-accent-700 py-2 leading-relaxed",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs md:text-sm font-medium dark:text-accent-400 text-accent-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Zhang",
    quote:
      "Their strategic consulting transformed our business completely. We went from $48M to $131M in annual revenue within 18 months and expanded to 25 countries.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "CEO, SolarTech Energy",
  },
  {
    name: "David Wang", 
    quote:
      "Their digital transformation strategy delivered incredible results - 23% efficiency gains, 35% cost reduction, and $50M in additional annual revenue.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "CTO, WindPower Energy",
  },
  {
    name: "Dr. Emily Chen",
    quote:
      "The technology roadmap they created was game-changing. We scaled from consumer products to grid-scale solutions, growing revenue from $210M to $680M.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Founder & CTO, EnergyStore Tech",
  },
  {
    name: "Robert Liu",
    quote:
      "Their hydrogen market strategy was brilliant. We pivoted from small applications to heavy-duty trucks and captured 12% market share.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Chairman & CEO, HydroPower Tech",
  },
  {
    name: "Maria Rodriguez",
    quote:
      "Outstanding market intelligence helped us identify a $2B opportunity in offshore wind. We're now the #3 player in floating platforms.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Chief Strategy Officer, OceanWind Corp",
  },
  {
    name: "James Thompson",
    quote:
      "Their supply chain optimization reduced our costs by 28% and improved delivery times by 40%. Exceptional strategic value.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "VP Operations, GreenGrid Solutions",
  },
  {
    name: "Lisa Park",
    quote:
      "They helped us secure $150M in Series B funding with a compelling investment thesis. Their financial modeling was instrumental.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "CFO, BatteryTech Innovations",
  },
  {
    name: "Michael Singh",
    quote:
      "Market entry strategy for Asia-Pacific was flawless. We achieved $80M revenue in year one across 8 countries.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Regional Director, SolarMax International",
  },
  {
    name: "Dr. Anna Kowalski",
    quote:
      "Their R&D prioritization framework helped us focus on breakthrough technologies. We now hold 12 key patents in energy storage.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Head of Innovation, PowerCell Technologies",
  },
  {
    name: "Carlos Mendez",
    quote:
      "Operational excellence consulting delivered 35% productivity gains and reduced our time-to-market by 6 months.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "COO, CleanTech Manufacturing",
  },
  {
    name: "Dr. Rachel Adams",
    quote:
      "Strategic partnerships they facilitated opened doors to $500M in new business opportunities. Truly transformational.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Business Development Director, FusionEnergy Corp",
  },
  {
    name: "Thomas Mueller",
    quote:
      "Digital transformation roadmap they designed increased our operational efficiency by 45% and reduced maintenance costs significantly.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Operations Manager, WindTech Europe",
  },
];
