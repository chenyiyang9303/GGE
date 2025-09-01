"use client";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FuzzySearch from "fuzzy-search";
import { getAllReports, getFeaturedReports, reportCategories, Report } from "@/lib/reports-data";

export function ReportsWithSearch() {
  const allReports = getAllReports();
  const featuredReports = getFeaturedReports();

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

        {featuredReports.slice(0, 1).map((report, index) => (
          <ReportCard report={report} key={report.title + index} />
        ))}

        <ReportPostRows reports={allReports} />
      </Container>
    </div>
  );
}

export const ReportPostRows = ({ reports }: { reports: Report[] }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(reports);

  useEffect(() => {
    const searcher = new FuzzySearch(reports, ["title", "description"], {
      caseSensitive: false,
    });
    const searchResults = searcher.search(search);
    setResults(searchResults);
  }, [search, reports]);
  
  return (
    <div className="w-full py-20">
      <div className="flex sm:flex-row flex-col justify-between gap-4 items-center mb-10">
        <p className="text-2xl font-bold text-neutral-800 dark:text-white">
          All Reports
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reports"
          className="text-sm max-w-xl w-full sm:min-w-96 border dark:border-transparent border-neutral-200 p-2 rounded-md dark:bg-neutral-800 bg-white shadow-sm focus:border-neutral-200 focus:ring-0 focus:outline-none outline-none text-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-400 placeholder:neutral-700"
        />
      </div>

      <div className="divide-y dark:divide-neutral-800 divide-neutral-200">
        {results.length === 0 ? (
          <p className="text-neutral-400 text-center p-4">No results found</p>
        ) : (
          results.map((report, index) => (
            <ReportPostRow report={report} key={report.id + index} />
          ))
        )}
      </div>
    </div>
  );
};

export const ReportPostRow = ({ report }: { report: Report }) => {
  return (
    <Link
      href={`/reports/${report.id}`}
      key={`${report.id}`}
      className="flex md:flex-row flex-col items-start justify-between md:items-center group/report-row py-4"
    >
      <div>
        <p className="dark:text-neutral-300 text-neutral-600 text-lg font-medium transition duration-200">
          {report.title}
        </p>
        <p className="dark:text-neutral-300 text-neutral-500 text-sm mt-2 max-w-xl transition duration-200">
          {truncate(report.description, 80)}
        </p>

        <div className="flex gap-4 items-center my-4">
          <p className="dark:text-neutral-300 text-neutral-500 text-sm max-w-xl transition duration-200">
            {format(new Date(report.publishDate), "MMMM dd, yyyy")}
          </p>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
            {reportCategories[report.category]}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-500">
            {report.readTime} • {report.fileSize}
          </span>
        </div>
      </div>
      <div className="text-neutral-600 dark:text-neutral-400 text-sm mt-4 md:mt-0">
        {report.author.name}
      </div>
    </Link>
  );
};

export const ReportCard = ({ report }: { report: Report }) => {
  return (
    <Link
      className="shadow-derek grid grid-cols-1 md:grid-cols-2 rounded-3xl group/report border border-transparent dark:hover:border-neutral-800 w-full dark:hover:bg-neutral-900 hover:border-neutral-200 hover:bg-neutral-100 overflow-hidden hover:scale-[1.02] transition duration-200"
      href={`/reports/${report.id}`}
    >
      <div className="">
        <BlurImage
          src={report.coverImage || ""}
          alt={report.title}
          height="800"
          width="800"
          className="h-full max-h-96 object-cover object-top w-full rounded-3xl"
        />
      </div>
      <div className="p-4 md:p-8 dark:group-hover/report:bg-neutral-900 group-hover/report:bg-neutral-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
              {reportCategories[report.category]}
            </span>
            {report.featured && (
              <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded">
                Featured
              </span>
            )}
          </div>
          <p className="text-lg md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            {report.title}
          </p>
          <p className="text-left text-base md:text-xl mt-2 text-neutral-600 dark:text-neutral-400">
            {truncate(report.description, 500)}
          </p>
        </div>
        <div className="flex space-x-2 items-center mt-6">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {report.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <p className="text-sm font-normal text-black dark:text-white">
            {report.author.name}
          </p>
          <div className="h-1 w-1 bg-neutral-300 rounded-full"></div>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm max-w-xl transition duration-200">
            {format(new Date(report.publishDate), "MMMM dd, yyyy")}
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
      alt={alt ? alt : "Report cover"}
      {...rest}
    />
  );
};

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};