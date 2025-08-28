"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SimpleBlogWithGrid() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <div className="py-4 md:py-10 overflow-hidden relative  px-4 md:px-8">
        <GridPatternContainer className="opacity-50" />
        <div className="relative z-20 py-10 text-center">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-accent-900 dark:text-white mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-accent-600 dark:text-accent-300 max-w-3xl mx-auto">
            Latest insights and strategies from clean energy industry experts to accelerate your growth.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-black dark:text-white">DevStudio</span>
    </Link>
  );
};

export const BlogCard = ({ blog }: { blog: Blog }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  return (
    <Link
      className="shadow-derek rounded-3xl border dark:border-neutral-800 w-full bg-white dark:bg-neutral-900  overflow-hidden  hover:scale-[1.02] transition duration-200"
      href={`/blog/${blog.slug}`}
    >
      {blog.image ? (
        <BlurImage
          src={blog.image || ""}
          alt={blog.title}
          height="800"
          width="800"
          className="h-52 object-cover object-top w-full"
        />
      ) : (
        <div className="h-52 flex items-center justify-center bg-white dark:bg-neutral-900">
          <Logo />
        </div>
      )}
      <div className="p-4 md:p-8 bg-white dark:bg-neutral-900">
        <div className="flex space-x-2 items-center  mb-2">
          <Image
            src={blog.authorAvatar}
            alt={blog.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
            {blog.author}
          </p>
        </div>
        <p className="text-lg font-bold mb-4 text-neutral-800 dark:text-neutral-100">
          {blog.title}
        </p>
        <p className="text-left text-sm mt-2 text-neutral-600 dark:text-neutral-400">
          {truncate(blog.description, 100)}
        </p>
      </div>
    </Link>
  );
};

type Blog = {
  title: string;
  description: string;
  slug: string;
  image: string;
  author: string;
  authorAvatar: string;
};
const blogs: Blog[] = [
  {
    title: "Solar Energy Breakthrough: Perovskite Tandem Cells Reach 33% Efficiency",
    description:
      "Revolutionary perovskite-silicon tandem solar cells achieve record-breaking efficiency, potentially transforming the solar industry landscape.",
    slug: "solar-energy-breakthrough-2024",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Dr. Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    title: "Offshore Wind's Floating Future: Revolutionary Platform Designs",
    description:
      "Deep-water floating wind platforms unlock vast offshore resources, with installations reaching 15MW capacity in waters over 200m deep.",
    slug: "offshore-wind-floating-platforms",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Michael Torres",
    authorAvatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    title: "Green Hydrogen's $300B Market: Scaling Beyond the Hype",
    description: "Analyzing the technical and economic challenges facing green hydrogen as it transitions from pilot projects to industrial scale.",
    slug: "green-hydrogen-scaling-challenges",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Dr. Elena Kowalski",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    title: "Battery Storage Revolution: Solid-State Breakthrough",
    description:
      "Solid-state battery technology achieves commercial viability, promising 10x energy density and 50-year lifespans for grid storage.",
    slug: "solid-state-battery-breakthrough",
    image:
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=4846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "James Liu",
    authorAvatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    title: "Policy Alert: EU's Green Deal Industrial Plan Impact",
    description:
      "Comprehensive analysis of how the EU's €270B Green Deal Industrial Plan will reshape global clean energy supply chains.",
    slug: "eu-green-deal-industrial-impact",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=5069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Dr. Maria Gonzalez",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    title: "Smart Grid Integration: AI Optimizes 45% More Renewable Energy",
    description:
      "Machine learning algorithms and predictive analytics enable unprecedented renewable energy integration rates across modern power grids.",
    slug: "ai-smart-grid-optimization",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=3212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Dr. Alex Kim",
    authorAvatar: "https://i.pravatar.cc/150?img=6",
  },
];

interface IBlurImage {
  height?: any;
  width?: any;
  src?: string | any;
  objectFit?: any;
  className?: string | any;
  alt?: string | undefined;
  layout?: any;
  [x: string]: any;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  objectFit,
  alt,
  layout,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 transform",
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      layout={layout}
      alt={alt ? alt : "Avatar"}
      {...rest}
    />
  );
};

export function GridPatternContainer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <GridPattern />
    </div>
  );
}
export function GridPattern() {
  const columns = 30;
  const rows = 11;
  return (
    <div className="flex bg-gray-200 dark:bg-neutral-700 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] ${
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-neutral-800"
                  : "bg-gray-100 dark:bg-neutral-800 shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
