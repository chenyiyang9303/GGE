"use client";
import { cn } from "@/lib/utils";
import { IconMessageCircleQuestion } from "@tabler/icons-react";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

export function CTAWithDashedGridLines() {
  const calConfig = useCalEmbed();

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-24 px-4 md:px-8">
      <section className="w-full grid grid-cols-1 md:grid-cols-3 justify-start relative z-20 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
      <GridLineHorizontal className="top-0" offset="200px" />
      <GridLineHorizontal className="bottom-0 top-auto" offset="200px" />
      <GridLineVertical className="left-0" offset="80px" />
      <GridLineVertical className="left-auto right-0" offset="80px" />
      <div className="md:col-span-2 p-10 md:p-16">
        <h2 className="text-left text-accent-600 dark:text-accent-300 text-2xl md:text-4xl font-display font-medium leading-tight">
          Ready to unlock your{" "}
          <span className="font-bold text-accent-900 dark:text-white">
            $10B market opportunity?
          </span>
        </h2>
        <p className="text-left text-accent-600 dark:text-accent-300 mt-6 max-w-lg text-lg md:text-xl font-medium leading-relaxed">
          Join 200+ clean energy leaders who've achieved{" "}
          <span className="text-primary-600 dark:text-primary-400 font-semibold">3x faster growth</span> with our{" "}
          <span className="text-primary-600 dark:text-primary-400 font-semibold">proven strategies</span>.
        </p>

        <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4 mt-10">
          <button 
            data-cal-namespace={calConfig.namespace}
            data-cal-link={calConfig.link}
            data-cal-config={`{"layout":"${calConfig.layout}"}`}
            className="group flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 min-w-[220px]"
          >
            <span>Get Strategic Assessment</span>
            <HiArrowRight className="ml-2 text-white group-hover:translate-x-1 h-4 w-4 transition-transform duration-200" />
          </button>
          <button 
            onClick={() => window.location.href = '/#case-studies'}
            className="group flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 min-w-[220px]"
          >
            <span>See $5B in Results</span>
            <IconMessageCircleQuestion className="ml-2 group-hover:translate-x-1 h-4 w-4 transition-transform duration-200" />
          </button>
        </div>
      </div>
      <div className="border-t md:border-t-0 md:border-l border-accent-200 dark:border-accent-700 border-dashed p-10 md:p-16">
        <div className="mb-6">
          <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
        </div>
        <p className="text-lg text-accent-700 dark:text-accent-200 leading-relaxed font-medium">
          &quot;Their strategic consulting transformed our business completely. We went from $48M to $131M in revenue within 18 months, expanded to 25 countries, and became a market leader in distributed solar.&quot;
        </p>
        <div className="flex flex-col text-sm items-start mt-6 gap-1">
          <p className="font-bold text-accent-900 dark:text-white">
            Sarah Zhang
          </p>
          <p className="text-accent-500 dark:text-accent-400">
            CEO, SolarTech Energy
          </p>
        </div>
      </div>
      </section>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
