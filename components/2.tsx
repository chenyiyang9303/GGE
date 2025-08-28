"use client";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FuzzySearch from "fuzzy-search";

export function BlogWithSearch() {
  return (
    <div className="relative overflow-hidden">
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 text-center">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-accent-900 dark:text-white mb-4">
            Market Intelligence Reports
          </h2>
          <p className="text-lg text-accent-600 dark:text-accent-300 max-w-3xl mx-auto">
            Deep-dive analysis and data-driven insights from the clean energy market to inform your strategic decisions.
          </p>
        </div>

        {blogs.slice(0, 1).map((blog, index) => (
          <BlogCard blog={blog} key={blog.title + index} />
        ))}

        <BlogPostRows blogs={blogs} />
      </Container>
    </div>
  );
}

export const BlogPostRows = ({ blogs }: { blogs: Blog[] }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(blogs);

  useEffect(() => {
    const searcher = new FuzzySearch(blogs, ["title", "description"], {
      caseSensitive: false,
    });
    const searchResults = searcher.search(search);
    setResults(searchResults);
  }, [search, blogs]);
  return (
    <div className="w-full py-20">
      <div className="flex sm:flex-row flex-col justify-between gap-4 items-center mb-10">
        <p className="text-2xl font-bold text-neutral-800 dark:text-white">
          More Posts
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blogs"
          className="text-sm max-w-xl w-full sm:min-w-96 border dark:border-transparent border-neutral-200 p-2 rounded-md dark:bg-neutral-800 bg-white shadow-sm focus:border-neutral-200 focus:ring-0 focus:outline-none outline-none text-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-400 placeholder:neutral-700"
        />
      </div>

      <div className="divide-y dark:divide-neutral-800 divide-neutral-200">
        {results.length === 0 ? (
          <p className="text-neutral-400 text-center p-4">No results found</p>
        ) : (
          results.map((blog, index) => (
            <BlogPostRow blog={blog} key={blog.slug + index} />
          ))
        )}
      </div>
    </div>
  );
};

export const BlogPostRow = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`${blog.slug}`}
      key={`${blog.slug}`}
      className="flex md:flex-row flex-col items-start justify-between md:items-center group/blog-row py-4"
    >
      <div>
        <p className="dark:text-neutral-300 text-neutral-600 text-lg font-medium transition duration-200">
          {blog.title}
        </p>
        <p className="dark:text-neutral-300 text-neutral-500 text-sm mt-2 max-w-xl transition duration-200">
          {truncate(blog.description, 80)}
        </p>

        <div className="flex gap-2 items-center my-4">
          <p className="dark:text-neutral-300 text-neutral-500 text-sm  max-w-xl transition duration-200">
            {format(new Date(blog.date), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
      <Image
        src={blog.authorAvatar}
        alt={blog.author}
        width={40}
        height={40}
        className="rounded-full md:h-10 md:w-10 h-6 w-6 mt-4 md:mt-0 object-cover"
      />
    </Link>
  );
};

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
  return (
    <Link
      className="shadow-derek grid grid-cols-1 md:grid-cols-2  rounded-3xl group/blog border border-transparent dark:hover:border-neutral-800 w-full dark:hover:bg-neutral-900 hover:border-neutral-200 hover:bg-neutral-100  overflow-hidden  hover:scale-[1.02] transition duration-200"
      href={`${blog.slug}`}
    >
      <div className="">
        {blog.image ? (
          <BlurImage
            src={blog.image || ""}
            alt={blog.title}
            height="800"
            width="800"
            className="h-full max-h-96 object-cover object-top w-full rounded-3xl"
          />
        ) : (
          <div className="h-full flex items-center justify-center dark:group-hover/blog:bg-neutral-900 group-hover/blog:bg-neutral-100">
            <Logo />
          </div>
        )}
      </div>
      <div className="p-4 md:p-8 dark:group-hover/blog:bg-neutral-900 group-hover/blog:bg-neutral-100 flex flex-col justify-between">
        <div>
          <p className="text-lg md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            {blog.title}
          </p>
          <p className="text-left text-base md:text-xl mt-2 text-neutral-600 dark:text-neutral-400">
            {truncate(blog.description, 500)}
          </p>
        </div>
        <div className="flex space-x-2 items-center  mt-6">
          <Image
            src={blog.authorAvatar}
            alt={blog.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-sm font-normal text-black dark:text-white">
            {blog.author}
          </p>
          <div className="h-1 w-1 bg-neutral-300 rounded-full"></div>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm  max-w-xl  transition duration-200">
            {format(new Date(blog.date), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

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
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
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

// Ideally fetched from a headless CMS or MDX files
type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  author: string;
  authorAvatar: string;
};
const blogs: Blog[] = [
  {
    title: "Global Solar Market Outlook 2024",
    description:
      "Comprehensive analysis of solar market trends, pricing dynamics, and growth projections across 50+ countries with detailed regional breakdowns.",
    date: "2024-01-15",
    slug: "global-solar-market-2024",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Research Team",
    authorAvatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    title: "Energy Storage Technology Roadmap 2024-2030",
    description:
      "Strategic analysis of battery technology evolution, cost projections, and market opportunities in grid-scale energy storage systems.",
    date: "2024-02-01",
    slug: "energy-storage-outlook-2024",
    image:
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Dr. Sarah Kim",
    authorAvatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    title: "Wind Energy Market Trends Q1 2024",
    description: "Quarterly analysis of offshore and onshore wind developments, capacity additions, and investment flows across key markets.",
    date: "2024-03-15",
    slug: "wind-energy-trends-2024",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Michael Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    title: "Green Hydrogen Investment Landscape 2024",
    description:
      "Deep-dive into green hydrogen project pipeline, funding trends, and policy frameworks driving the $300B market opportunity.",
    date: "2024-04-10",
    slug: "green-hydrogen-investment-2024",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Elena Rodriguez",
    authorAvatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    title: "Clean Energy Policy Impact Assessment 2024",
    description:
      "Analysis of IRA, EU Green Deal, and China's renewable mandates - quantifying policy impact on clean energy deployment and investment.",
    date: "2024-05-01",
    slug: "clean-energy-policy-impact-2024",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Policy Research",
    authorAvatar: "https://i.pravatar.cc/150?img=11",
  },
];

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};
